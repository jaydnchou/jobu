import React, { forwardRef } from 'react';
import { css } from 'emotion';

import { colors, gutter } from '../utils';

const shadow = str => `${str}, inset 0 2px 1px rgba(0, 0, 0, 0.075)`;

function makeSize(size) {
	const sizes = {
		small: {
			fontSize: '0.85rem',
			padding: `${gutter / 2}px ${gutter}px`,
		},
		medium: {
			fontSize: '1rem',
			padding: `${gutter}px ${gutter * 1.5}px`,
		},
		large: {
			fontSize: '1.25rem',
			padding: `${gutter * 1.5}px ${gutter * 2}px`,
		},
	};
	return sizes[size];
}

export const Input = forwardRef(({ isMultiline, size, ...props }, ref) => {
	const styles = {
		appearance: 'none',
		background: 'none',
		backgroundColor: '#363852',
		border: 0,
		borderRadius: 25,
		color: 'inherit',
		lineHeight: '1.4em',
		margin: 0,
		padding: '8px 12px',
		verticalAlign: 'middle',
		whiteSpace: 'nowrap',
		width: '100%',
		...makeSize(size),

		':hover': {
			outline: 0,
		},
		':focus': {
			outline: 0,
		},
		'&[disabled]': {
			boxShadow: 'none',
			backgroundColor: colors.blueGrey['50'],
		},
	};
	return isMultiline ? (
		<textarea
			ref={ref}
			className={css({ ...styles, lineHeight: 'inherit', height: 'auto' })}
			{...props}
		/>
	) : (
		<input ref={ref} className={css(styles)} {...props} />
	);
});

Input.defaultProps = {
	size: 'medium',
};
