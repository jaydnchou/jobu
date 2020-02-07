import React, { createContext } from 'react';
import getConfig from 'next/config';
import Router from 'next/router';

const {
	publicRuntimeConfig: { apiEndpoint },
} = getConfig();

const initialiseUserData = data => ({
	id: undefined,
	name: '',
	email: '',
	favorites: [],
	...data,
});

const getIsLoggedIn = user => user.id !== undefined;

const UserContext = createContext();

export class UserProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: initialiseUserData(props.initialUserValue),
		};
	}

	login = async email => {
		try {
			await fetch(`${apiEndpoint}/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});

			const { user } = await fetch(`${apiEndpoint}/session`).then(res =>
				res.json()
			);

			this.setState(initialiseUserData({ user }));
		} catch (error) {
			console.error('Error logging in:', error.message);
		}
	};

	logout = async (event, to) => {
		event.preventDefault();

		await fetch(`${apiEndpoint}/logout`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		});

		this.setState({ user: initialiseUserData() });
		Router.push(to);
	};

	addFavorite = async jobId => {
		const { user } = this.state;

		if (!getIsLoggedIn(user)) return;

		const { favorites } = await fetch(`${apiEndpoint}/favorites/save`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ jobId }),
		}).then(res => res.json());

		this.setState({ user: { ...user, favorites } });
	};

	removeFavorite = async jobId => {
		const { user } = this.state;

		if (!getIsLoggedIn(user)) return;

		const { favorites } = await fetch(`${apiEndpoint}/favorites/remove`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ jobId }),
		}).then(res => res.json());

		this.setState({ user: { ...user, favorites } });
	};

	render() {
		const { user } = this.state;
		return (
			<UserContext.Provider
				value={{
					user: {
						...user,
						isLoggedIn: getIsLoggedIn(user),
						login: this.login,
						logout: this.logout,
						addFavorite: this.addFavorite,
						removeFavorite: this.removeFavorite,
					},
				}}
				children={this.props.children}
			/>
		);
	}
}

export const UserConsumer = UserContext.Consumer;

export const withUser = WrappedComponent => {
	return class User extends React.Component {
		static displayName = `withUser(${WrappedComponent.displayName ||
			WrappedComponent.name})`;

		render() {
			return (
				<UserContext.Consumer>
					{({ user }) => <WrappedComponent {...this.props} user={user} />}
				</UserContext.Consumer>
			);
		}
	};
};
