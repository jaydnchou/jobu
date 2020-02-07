import PropTypes from 'prop-types';
import React from 'react';

import { css } from 'emotion';

// Grid Parent
// --------------------

function formatAreas(areas) {
	return areas.map(area => `"${area}"`).join(' ');
}

export const Grid = ({
	alignContent,
	areas,
	columns = 12,
	flow = 'row',
	gap = 8,
	justifyContent,
	minRowHeight = 20,
	rows,
	...props
}) => {
	const templateRows = rows ? { gridTemplateRows: rows } : {};
	const templateAreas = areas ? { gridTemplateAreas: formatAreas(areas) } : {};
	const gridTemplateColumns = Number.isInteger(columns)
		? `repeat(${columns}, 1fr)`
		: columns;

	return (
		<div
			className={css({
				display: 'grid',
				gridAutoFlow: flow,
				gridAutoRows: `minmax(${minRowHeight}px, auto)`,
				gridGap: gap,
				gridTemplateColumns,
				justifyContent,
				alignContent,
				...templateRows,
				...templateAreas,
			})}
			{...props}
		/>
	);
};
Grid.propTypes = {
	alignContent: PropTypes.string,
	areas: PropTypes.arrayOf(PropTypes.string),
	columns: PropTypes.number,
	flow: PropTypes.string,
	gap: PropTypes.number,
	justifyContent: PropTypes.string,
	minRowHeight: PropTypes.number,
	rows: PropTypes.string,
};

// Cell
// ------------------------------

export const GridCell = ({
	area,
	height = 1,
	left,
	top,
	width = 1,
	...props
}) => (
	<div
		className={css({
			alignContent: 'space-around',
			gridArea: area,
			gridColumnEnd: `span ${width}`,
			gridColumnStart: left,
			gridRowEnd: `span ${height}`,
			gridRowStart: top,
			height: '100%',
			minWidth: 0,
		})}
		{...props}
	/>
);
GridCell.propTypes = {
	area: PropTypes.string,
	center: PropTypes.bool,
	height: PropTypes.number,
	left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	middle: PropTypes.bool,
	top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	width: PropTypes.number,
};
