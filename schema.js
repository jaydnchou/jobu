const { gql } = require('apollo-server-express');

const JOBS = require('./data/jobs.json');
const USERS = require('./data/users.json');

// Types
exports.typeDefs = gql`
	type Query {
		jobs: [Job]
		getJob(id: String): Job
		searchJobs(title: String!): [Job]
	}
	type Job {
		id: String!
		title: String!
		logo: String
		source: String!
		suburb: String!
		labels: [Tag]
		description: String!
		dateAdded: String!
		favorite: Boolean!
	}
	type Tag {
		description: String
	}
	type User {
		id: ID!
		name: String
		email: String!
		favorites: [Job]
	}
	type Mutation {
		login(input: String!): User
	}
`;

// Resolvers
const jobs = () => JOBS;
const getJob = (_, { id }) => JOBS.find(job => job.id === id);
const searchJobs = (_, { title }) =>
	JOBS.filter(job => job.title.toLowerCase().indexOf(title.toLowerCase()) > -1);
const login = (_, { input }) => USERS.find(user => user.email === input);

exports.resolvers = {
	Query: {
		jobs,
		getJob,
		searchJobs,
	},
	Mutation: {
		login,
	},
};
