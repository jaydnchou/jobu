import React from 'react';
import { css } from 'emotion';

import { formatDate } from '../utils';
import { FlexGroup, H3 } from '../primitives';
import { FavoriteInline } from './Favorite'; // TODO
import { Link } from './Router';

export const JobItem = ({ job }) => (
	<div
		className={css({
			fontSize: 14,
			padding: 16,
			backgroundColor: '#15161A',
			borderRadius: '10px',
		})}
	>
		<FlexGroup align="center" growIndexes={[0]}>
			<div>
				<H3
					as="h2"
					style={{ color: '#847DE3', fontWeight: 'light', fontSize: '1.5em' }}
				>
					<Link to={`/job?jobId=${job.id}`} as={`/job/${job.id}`}>
						{job.title}
					</Link>
				</H3>

				<div>{formatDate(job.dateAdded)}</div>
				<div>{job.source}</div>
			</div>
			<FlexGroup isVertical>
				<img src={job.logo} alt={job.source} style={{ maxWidth: 80, width: 50, height: 50 }} />
			</FlexGroup>
		</FlexGroup>
	</div>
);
