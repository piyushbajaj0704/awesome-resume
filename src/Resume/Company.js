import React from 'react';
import Project from './Project';
import List from '../ui/List';
import CompanyHeading from './CompanyHeading';
import Section from '../ui/Section';
import PropTypes from 'prop-types';

const Company = ({
	color,
	name,
	title,
	projects = [],
	achievements = [],
	date,
	location
}) => {
	return (
		<div>
			<CompanyHeading
				company={name}
				title={title}
				date={date}
				location={location}
				style={{
					paddingLeft: '0.5rem'
				}}
			/>

			<Section color={color}>
				<List items={achievements} />
				{projects.map((project, key) => (
					<Project
						name={project.name}
						achievements={project.achievements}
						tools={project.tools}
						key={key}
					/>
				))}
			</Section>
		</div>
	);
};

Company.propTypes = {
	color: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	children: PropTypes.node
};

export default Company;
