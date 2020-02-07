import React from 'react';
import { css } from 'emotion';
import { borderRadius, gutter } from '../utils';

export const Card = ({ pad, ...props }) => (
	<div
		className={css({
			backgroundColor: 'white',
			boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1)',
			borderRadius: borderRadius,
			marginBottom: gutter * 3,
			padding: pad ? gutter * 2 : null,
		})}
		{...props}
	/>
);
