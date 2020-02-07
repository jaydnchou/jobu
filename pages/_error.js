import React from 'react';

import { NotFound } from '../components/NotFound';

export default class Error extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {
		const { statusCode } = this.props;

		if (statusCode === 404) return <NotFound />;

		return (
			<p>
				{statusCode
					? `A ${statusCode} error occurred on the server.`
					: 'An error occurred.'}
			</p>
		);
	}
}
