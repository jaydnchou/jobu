import React, { forwardRef } from 'react';

export const Use = forwardRef(({ as: Component, ...props }, ref) => (
	<Component {...props} ref={ref} />
));
