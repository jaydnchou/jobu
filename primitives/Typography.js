import { css } from 'emotion';
import React from 'react';

import { colors, gutter } from '../utils';
import { Use } from './Use';

const Base = ({ as, styles, ...props }) => (
	<Use
		as={as}
		className={css({ marginBottom: '0.66em', fontWeight: 500, ...styles })}
		{...props}
	/>
);

export const H1 = props => <Base styles={{ fontSize: 36 }} {...props} />;
export const H2 = props => <Base styles={{ fontSize: 24 }} {...props} />;
export const H3 = props => <Base styles={{ fontSize: 18 }} {...props} />;

H1.defaultProps = { as: 'h1' };
H2.defaultProps = { as: 'h2' };
H3.defaultProps = { as: 'h3' };

export const Hr = props => (
	<hr
		className={css({
			border: 0,
			backgroundColor: colors.blueGrey['50'],
			height: 2,
			marginBottom: gutter * 3,
			marginTop: gutter * 3,
		})}
		{...props}
	/>
);
