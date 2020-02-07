import Octicon, { Check, Star } from '@githubprimer/octicons-react';
import { css } from 'emotion';
import React from 'react';

import { FlexGroup, IconButton } from '../primitives';
import { UserConsumer } from './UserContext';
import { gutter } from '../utils';

const handleClick = (user, id, isSaved) => () => {
	if (!user.isLoggedIn) {
		return confirm('You must be logged in to favorite.');
	}

	if (isSaved) {
		user.removeFavorite(id);
	} else {
		user.addFavorite(id);
	}
};

export const Favorite = ({ children, id, ...props }) => (
	<UserConsumer>
		{({ user }) => {
			const isSaved =
				Array.isArray(user.favorites) && user.favorites.includes(id);
			const onClick = handleClick(user, id, isSaved);
			return children({ isSaved, onClick });
		}}
	</UserConsumer>
);

export const FavoriteButton = ({ id, ...props }) => (
	<Favorite id={id}>
		{({ isSaved, onClick }) => (
			<IconButton onClick={onClick} icon={isSaved ? Check : Star} {...props}>
				{isSaved ? 'Saved' : 'Save'}
			</IconButton>
		)}
	</Favorite>
);

export const FavoriteInline = ({ id, gutter }) => (
	<Favorite id={id}>
		{({ isSaved, onClick }) => (
			<button
				onClick={onClick}
				className={css({
					background: isSaved ? '#847DE3' : 'slategray',
					border: 0,
					borderRadius: 25,
					color: 'ghostwhite',
					cursor: 'pointer',
					padding: `${gutter / 4}px ${gutter}px`,

					':hover, :focus': {
						background: isSaved ? '#847DE3' : 'slategray',
						outline: 0,
					},
				})}
			>
				<FlexGroup>
					<Octicon icon={isSaved ? Check : Star} />
					{isSaved ? 'Saved' : 'Save'}
				</FlexGroup>
			</button>
		)}
	</Favorite>
);
