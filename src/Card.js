import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './colors.css';
import './Card.css';

const Card = ({level, name, description, onClick}) => {
  const className = classnames('card', `level-${level}`);

  return (
    <div className={className} onClick={onClick}>
      <h2 className="card-level-number-and-name">
        <span className="card-level-number">{level}</span>
        <span className="card-level-name">{name}</span>
      </h2>
      <p className="card-level-description">{description}</p>
    </div>
  );
};

Card.propTypes = {
  level: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
