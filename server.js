const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const nextApp = require('next');

const { typeDefs, resolvers } = require('./schema');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextApp({ dev });
const handle = app.getRequestHandler();

// Use Apollo Server
const apollo = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		endpoint: `http://localhost:3000/graphql`,
		settings: {
			'editor.theme': 'dark',
		},
	},
});

app.prepare().then(() => {
	const server = express();

	// Serve staic assets
	server.use(express.static('./public'));

	// API
	server.use(
		'/api',
		cookieSession({
			httpOnly: false,
			keys: ['super-secret-key'],
			maxAge: 24 * 60 * 60 * 1000,
			name: 'jobu',
		})
	);
	server.use('/api', bodyParser.json());
	server.use('/api', bodyParser.urlencoded({ extended: true }));
	server.use('/api', require('./api'));

	apollo.applyMiddleware({ app: server });

	// Dynamic Job Route
	server.get('/job/:jobId', (req, res) => {
		// Pass the params in
		const { jobId } = req.params;
		app.render(req, res, '/job', { jobId, ...req.query });
	});

	// Handle all other routes
	server.get('*', handle);

	server.listen(port, error => {
		if (error) throw error;
		console.log(`🚀 Server started on http://localhost:${port}`);
		console.log(
			`🚀 GraphQL Playground started on http://localhost:${port}/graphql`
		);
	});
});
