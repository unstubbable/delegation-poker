import React from 'react';
import classnames from 'classnames';
import './Level.css';

const Level = ({level, name, description}) => {
  const className = classnames('level', `level-${level}`);

  return (
    <li className={className}>
      <h2 className="level-name">{name}</h2>
      <p className="level-description">{description}</p>
    </li>
  );
};

export default Level;
