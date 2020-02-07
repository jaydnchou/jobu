export { colors } from './colors';
export { history } from './history';
export { throttle } from './throttle';
export { generateLoremIpsum, Lorem } from './lorem';

export const gutter = 8;
export const borderRadius = 3;

export const formatDate = dateString =>
	new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
