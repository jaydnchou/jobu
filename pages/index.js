import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import { css } from 'emotion';

import { gql } from 'apollo-boost';

import { Grid, Container, Page } from '../primitives';
import { SearchForm } from '../components/SearchForm';
import { JobItem } from '../components/JobItem';
import { NoResults } from '../components/NoResults';

const ALL_JOBS = gql`
	query listJobs {
		jobs {
			id
			dateAdded
			title
			source
			description
			logo
		}
	}
`;

export const Home = ({ jobs }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [results, setResults] = useState(jobs);

	const onChange = event => {
		event.preventDefault();
		setSearchQuery(event.target.value);
	};

	const onSearch = event => {
		event.preventDefault();
		const filtered = results.filter(
			job => job.title.toLowerCase() === searchQuery.toLowerCase()
		);
		setResults(filtered);
	};

	const onClear = () => {
		setSearchQuery('');
		setResults(jobs);
	};

	return (
		<Fragment>
			<Head>
				<title>Jobu | Hire me</title>
			</Head>
			<Container>
				<span
					className={css({
						fontSize: '1.5rem',
						marginRight: '10px',
					})}
				>
					Find your next
				</span>
				<span
					className={css({
						display: 'block',
						fontSize: '3rem',
						fontWeight: 'bold',
						background: 'linear-gradient(to right, #C850C0 0%, #6960F5 100% )',
						'-webkit-text-fill-color': 'transparent',
						'-webkit-background-clip': 'text',
					})}
				>
					inspiration
				</span>
				<SearchForm
					onChange={onChange}
					onSubmit={onSearch}
					onClear={onClear}
					value={searchQuery}
				/>
			</Container>
			<Container style={{ color: 'slategray', marginBottom: '1em' }}>
				{`Listings: ${results.length}`}
			</Container>
			<Page
				width={12}
				main={
					<Grid columns={2} rows={'minmax(150px, auto)'} gap={10}>
						{results.length > 0 ? (
							results.map(job => <JobItem key={job.id} job={job} />)
						) : (
							<NoResults />
						)}
					</Grid>
				}
			/>
		</Fragment>
	);
};
Home.getInitialProps = async context => {
	const { apolloClient } = context;
	const { data } = await apolloClient.query({ query: ALL_JOBS });
	const { jobs } = data;
	return { jobs };
};

export default Home;
