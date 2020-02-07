import Octicon, { Star } from '@githubprimer/octicons-react';
import React, { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import { css } from 'emotion';
import Head from 'next/head';

import { Grid, Container, Page } from '../primitives';
import { UserConsumer } from '../components/UserContext';
import { gutter } from '../utils';
import { Redirect } from '../components/Router';
import { JobItem } from '../components/JobItem';

export const NoFavorites = () => (
	<div className={css({ padding: gutter * 2, textAlign: 'center' })}>
		<h1>You haven't shortlisted any jobs</h1>
		<p>
			You can save a job by clicking on the <Octicon icon={Star} /> button on a
			job listing.
		</p>
	</div>
);

const {
	publicRuntimeConfig: { apiEndpoint },
} = getConfig();

function fetchUser(options = {}) {
	const url = `${apiEndpoint}/session`;
	return fetch(url, options).then(res => res.json());
}

function fetchFavorites(options = {}) {
	const url = `${apiEndpoint}/favorites`;
	return fetch(url, options).then(res => res.json());
}

const cleanFavourites = arr => arr.filter(i => i && i.id);

export default class Profile extends React.Component {
	static async getInitialProps({ req }) {
		// We need to forward the request headers on the server.
		const options = !!req ? { headers: req.headers } : {};
		const { user } = await fetchUser(options);
		const { favorites } = await fetchFavorites(options);
		return { favorites: cleanFavourites(favorites), user };
	}

	render() {
		const { favorites, user } = this.props;

		if (!user.id) {
			return <Redirect to="/" />;
		}

		return favorites.length === 0 ? (
			<NoFavorites />
		) : (
			<Fragment>
				<Head>
					<title>Your Profile</title>
				</Head>
				<Container style={{ color: 'slategray', marginBottom: '1em' }}>
					Saved Listings
				</Container>
				<Page
					width={5}
					main={
						<Grid columns={2} rows={'minmax(150px, auto)'} gap={10}>
							{favorites.map(job => (
								<JobItem key={job.id} job={job} />
							))}
						</Grid>
					}
				/>
			</Fragment>
		);
	}
}
