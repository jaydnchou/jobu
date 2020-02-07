import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

export const FlexGroup = ({
	align = 'stretch',
	children,
	growIndexes = [],
	isInline,
	isVertical,
	justify = 'flex-start',
	wrap = false,
	spacing = 8,
	stretch,
	tag: Tag = 'div',
	...props
}) => {
	const gutter = spacing / 2;
	const childArray = Children.toArray(children).filter(Boolean); // filter out null and undefined children

	return (
		<Tag
			className={css({
				alignItems: align,
				display: isInline ? 'inline-flex' : 'flex',
				flexDirection: isVertical ? 'column' : 'row',
				flexWrap: wrap ? 'wrap' : 'nowrap',
				justifyContent: justify,
				marginBottom: isVertical ? -gutter : null,
				marginLeft: isVertical ? null : -gutter,
				marginRight: isVertical ? null : -gutter,
				marginTop: isVertical ? -gutter : null,
				maxWidth: isInline ? `calc(100% + ${gutter * 2}px)` : null,
			})}
			{...props}
		>
			{childArray.map((child, idx) => (
				<div
					key={child.key || idx}
					className={css({
						flex: stretch || growIndexes.includes(idx) ? 1 : null,
						marginLeft: isVertical ? null : gutter,
						marginRight: isVertical ? null : gutter,
						marginTop: isVertical ? gutter : null,
						marginBottom: isVertical ? gutter : null,
						minWidth: 0, // allows text-overflow on children
					})}
				>
					{child}
				</div>
			))}
		</Tag>
	);
};

FlexGroup.propTypes = {
	align: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-start']),
	children: PropTypes.node,
	growIndexes: PropTypes.arrayOf(PropTypes.number),
	isInline: PropTypes.bool,
	isVertical: PropTypes.bool,
	justify: PropTypes.oneOf([
		'space-between',
		'space-around',
		'center',
		'flex-end',
		'flex-start',
	]),
	wrap: PropTypes.bool,
	spacing: PropTypes.number,
	stretch: PropTypes.bool,
	tag: PropTypes.string,
};
