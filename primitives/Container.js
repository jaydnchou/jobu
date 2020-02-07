import React, { forwardRef } from 'react';
import { css } from 'emotion';

const styles = {
	maxWidth: 940,
	marginTop: 20,
	marginBottom: 20,
	marginLeft: 'auto',
	marginRight: 'auto',
	paddingLeft: 20,
	paddingRight: 20,
};

export const Container = forwardRef(({ className, ...props }, ref) => (
	<div {...props} ref={ref} className={`${css(styles)} ${className || ''}`} />
));
