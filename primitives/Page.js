import React, { Fragment } from 'react';

import { Container, GridCell, Grid, Use } from '../primitives';
import { gutter } from '../utils';

export const Page = ({ contain = true, main, aside, width }) => (
	<Use as={contain ? Container : Fragment}>
		<Grid gap={gutter * 3}>
			<GridCell width={width}>{main}</GridCell>
			{aside ? <GridCell width={3}>{aside}</GridCell> : null}
		</Grid>
	</Use>
);
