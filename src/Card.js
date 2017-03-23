/* @flow */

import React from 'react';
import classnames from 'classnames';
import type { Level } from './App';
import './colors.css';
import './Card.css';

export type CardProps = Level & {
  onClick: (level: Level) => void;
}

const Card = ({level, name, description, onClick}: CardProps) => {
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

export default Card;
