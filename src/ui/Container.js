import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => <div style={style}>{children}</div>;

Container.propTypes = {
	children: PropTypes.node.isRequired
};

const width = 1000;
const height = 11 / 8.5 * width;

const style = {
	width: `${width}px`,
	height: `${height}px`,
	margin: '0 auto',
	fontFamily: "'Open Sans', sans-serif",
	display: 'flex',
	justifyContent: 'flex-start',
	flexFlow: 'column'
};

export default Container;
