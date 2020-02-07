import Octicon from '@githubprimer/octicons-react';
import React, { forwardRef } from 'react';
import { css } from 'emotion';

import { borderRadius, colors, gutter } from '../utils';
import { Link } from '../components/Router';
import { FlexGroup } from './FlexGroup';
import { Use } from './Use';

function makeSize(size) {
	const sizes = {
		small: {
			fontSize: '0.85rem',
			borderRadius: '25px',
			padding: `${gutter / 2}px ${gutter}px`,
		},
		medium: {
			fontSize: '1rem',
			borderRadius: '25px',
			padding: `${gutter}px ${gutter * 1.5}px`,
		},
		large: {
			fontSize: '1.25rem',
			borderRadius: '25px',
			padding: `${gutter * 1.5}px ${gutter * 2}px`,
		},
	};
	return sizes[size];
}

function makeVariant(appearance) {
	const activeStyles = {
		transform: 'scale(0.98)',
	};
	const variants = {
		primary: {
			backgroundColor: 'rgba(255,20,147, .8)',
			color: 'white',
			fontSize: '1em',

			':hover, :focus': { backgroundColor: 'rgba(255,20,147, .8)', outline: 0 },
			':hover': { backgroundColor: '#ff008a' },
			':active': {
				backgroundColor: 'deeppink',
				...activeStyles,
			},
		},
		secondary: {
			backgroundColor: colors.blue.a700,
			color: 'white',

			':hover, :focus': { backgroundColor: colors.blue.a400, outline: 0 },
			':active': {
				backgroundColor: colors.blue.a700,
				...activeStyles,
			},
		},
		default: {
			backgroundColor: colors.blueGrey['100'],

			':hover, :focus': { backgroundColor: colors.blue['100'], outline: 0 },
			':active': activeStyles,
		},
	};
	return variants[appearance];
}

export const Button = forwardRef(
	({ appearance, className, isBlock, isDisabled, size, ...rest }, ref) => {
		let props = rest;
		let as = 'span';
		if (props.href) {
			as = 'a';
		} else if (props.to) {
			as = Link;
		} else if (props.onClick || props.type) {
			as = 'button';
			props.type = props.type !== undefined ? props.type : 'button';

			if (isDisabled) {
				props.disabled = true;
			}
		}

		return (
			<Use
				{...props}
				as={as}
				ref={ref}
				className={css({
					appearance: 'none',
					borderRadius: borderRadius,
					border: 0,
					boxShadow: `inset 0 -2px 0 rgba(0, 0, 0, 0.16)`,
					cursor: isDisabled ? 'default' : 'pointer',
					display: isBlock ? 'block' : 'inline-block',
					lineHeight: '1.4em',
					opacity: isDisabled ? 0.66 : null,
					outline: 0,
					pointerEvents: isDisabled ? 'none' : null,
					textAlign: 'center',
					touchAction: 'manipulation', // Disables "double-tap to zoom" for mobile; removes delay on click events
					userSelect: 'none',
					width: isBlock ? '100%' : null,
					...makeSize(size),
					...makeVariant(appearance),
				})}
			/>
		);
	}
);

Button.defaultProps = {
	appearance: 'default',
	size: 'medium',
};

export const IconButton = ({ children, icon, ...props }) => (
	<Button {...props}>
		<FlexGroup align="center" justify="center">
			<Octicon icon={icon} />
			{children}
		</FlexGroup>
	</Button>
);
