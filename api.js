const express = require('express');

const JOBS = require('./data/jobs.json');
const USERS = require('./data/users.json');

const router = express.Router();

// HELPER
const getJobById = id => JOBS.find(job => job.id === id);
const searchJobs = search =>
	JOBS.filter(
		job => job.title.toLowerCase().indexOf(search.toLowerCase()) > -1
	);
const getUserByEmail = email => USERS.find(user => user.email === email);
const getUserById = id => USERS.find(user => user.id === id);
const saveUserFavorites = (userID, favorites) =>
	USERS.some((user, i) => {
		if (user.id === userID) {
			USERS[i].favorites = favorites;
			return true;
		}
	});

// ROUTES
// SESSION
router.post('/login', (req, res) => {
	const { email, redirect } = req.body;
	const user = getUserByEmail(email);

	if (user) {
		req.session = {
			user: user,
		};

		if (redirect) {
			res.redirect(redirect);
			return;
		}
		return res.json({ success: true });
	} else {
		res.status(400).json({ error: 'Invalid user' });
	}
});
router.post('/logout', (req, res) => {
	const { redirect } = req.body;
	req.session = null;

	if (redirect) {
		res.redirect(redirect);
		return;
	}
	return res.json({ success: true });
});
router.get('/session', (req, res) => {
	res.json(req.session);
});

// JOBS
router.get('/jobs', (req, res) => {
	const { search, start = 0, length = 20 } = req.query;
	const begin = parseInt(start);
	const end = begin + parseInt(length);

	if (search) {
		return res.json({
			jobs: searchJobs(search).slice(begin, end),
		});
	} else {
		return res.json({ jobs: JOBS.slice(begin, end) });
	}
});
router.get('/jobs/:id', (req, res) =>
	res.json({ job: getJobById(req.params.id) })
);

// FAVORITES
router.get('/favorites', (req, res) => {
	const { user } = req.session;

	if (user) {
		const { favorites } = getUserById(user.id);
		const data = favorites.map(favorite => getJobById(favorite));
		req.session.user.favorites = data;
		return res.json({ favorites: data });
	} else {
		res.status(403).json({ error: 'You have to be logged in to favor a job' });
	}
});
router.post('/favorites/save', (req, res) => {
	const { user, redirect } = req.session;

	if (user) {
		const { favorites } = getUserById(user.id);
		const { jobId } = req.body;

		if (!favorites.includes(jobId)) {
			favorites.push(jobId);
			saveUserFavorites(user.id, favorites);
			req.session.user.favorites = favorites;
		}

		if (redirect) {
			res.redirect(redirect);
			return;
		}
		return res.json({ favorites });
	} else {
		res.status(403).json({ error: 'You have to be logged in to favor a job' });
	}
});
router.post('/favorites/remove', (req, res) => {
	const { user, redirect } = req.session;

	if (user) {
		const { favorites } = getUserById(user.id);
		const { jobId } = req.body;

		const newFavorites = favorites.filter(job => job != jobId);
		saveUserFavorites(user.id, newFavorites);
		req.session.user.favorites = newFavorites;

		if (redirect) {
			res.redirect(redirect);
			return;
		}
		return res.json({ favorites: newFavorites });
	} else {
		res.status(403).json({ error: 'You have to be logged in to favor a job' });
	}
});

module.exports = router;
