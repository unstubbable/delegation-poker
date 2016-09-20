import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './colors.css';
import './Level.css';

const Level = ({level, name, description, onClick}) => {
  const className = classnames('level', `level-${level}`);

  return (
    <li className={className} onClick={() => onClick({level, name, description})}>
      <h2 className="level-name">{name}</h2>
      <p className="level-description">{description}</p>
    </li>
  );
};

Level.propTypes = {
  level: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Level;
