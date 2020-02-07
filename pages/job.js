import { Mail } from '@githubprimer/octicons-react';
import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { css } from 'emotion';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { Button, Card, Page, FlexGroup, IconButton, H1 } from '../primitives';
import { colors, formatDate, gutter, Lorem } from '../utils';
import { FavoriteButton } from '../components/Favorite';
import { NotFound } from '../components/NotFound';

const JOB_DETAIL = gql`
	query getJob($id: String) {
		getJob(id: $id) {
			id
			title
			description
			source
			dateAdded
		}
	}
`;

const Detail = () => {
	const router = useRouter();
	const { jobId } = router.query;

	const { data, error, loading } = useQuery(JOB_DETAIL, {
		displayName: 'Job Detail',
		variables: { id: jobId },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!data.getJob) return <NotFound />;

	const { id, title, description, source, dateAdded } = data.getJob;

	const applyForJob = () => confirm('Good Luck!');
	const sendJob = () => confirm('Sent!');

	return (
		<Fragment>
			<Head>
				<title>Job Details: {title}</title>
			</Head>
			<Page
				width={9}
				main={
					<Card
						style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
						pad
					>
						<H1
							style={{
								color: '#847DE3',
								fontWeight: 'bold',
								fontSize: '3.5em',
								lineHeight: '1em',
							}}
						>
							{title}
						</H1>
						<div
							className={css({
								textTransform: 'uppercase',
								fontSize: '12px',
								marginBottom: '2em',
							})}
						>{`${source} | ${formatDate(dateAdded)}`}</div>
						<p>{description}</p>
						<div
							className={css({
								color: colors.grey['600'],
								fontSize: 14,
								marginTop: gutter,
							})}
						>
							<Lorem count={4} />
						</div>
					</Card>
				}
				aside={
					<aside style={{ paddingTop: '2em' }}>
						<Button
							style={{
								fontSize: '12px',
								fontFamily: 'Montserrat',
								textTransform: 'uppercase',
							}}
							appearance="primary"
							isBlock
							onClick={applyForJob}
						>
							Apply now
						</Button>
						<FlexGroup stretch style={{ marginTop: gutter }}>
							<FavoriteButton
								id={id}
								style={{
									backgroundColor: '#363852',
									color: 'ghostwhite',
									fontSize: '12px',
									fontFamily: 'Montserrat',
									textTransform: 'uppercase',
								}}
								isBlock
							/>
							<IconButton
								style={{
									backgroundColor: '#363852',
									color: 'ghostwhite',
									fontSize: '12px',
									fontFamily: 'Montserrat',
									textTransform: 'uppercase',
								}}
								onClick={sendJob}
								isBlock
								icon={Mail}
							>
								Send
							</IconButton>
						</FlexGroup>
					</aside>
				}
			/>
		</Fragment>
	);
};

export default Detail;
