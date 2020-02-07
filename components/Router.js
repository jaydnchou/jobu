import Router from 'next/router';
import NextLink from 'next/link';
import React from 'react';

export const Link = React.forwardRef(({ to, as, ...props }, ref) => (
	<NextLink href={to} as={as}>
		<a ref={ref} {...props} />
	</NextLink>
));

export class Redirect extends React.Component {
	componentDidMount = () => {
		const { to } = this.props;
		Router.push(to);
	};

	render() {
		return null;
	}
}
