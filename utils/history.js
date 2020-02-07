// Browser History API helpers

export const replace = (path, title = null) =>
	window.history.replaceState({}, title, path);
export const push = (path, title = null) =>
	window.history.pushState({}, title, path);

export const history = { push, replace };
