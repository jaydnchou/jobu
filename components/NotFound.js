import { Button, Page, H1 } from '../primitives';
import React, { Fragment } from 'react';

export const NotFound = () => (
	<Page
		main={
			<Fragment>
				<H1>Not found</H1>
				<p>Sorry, we couldn't find what you're looking for.</p>
				<p>
					<Button to="/">Home</Button>
				</p>
			</Fragment>
		}
	/>
);
