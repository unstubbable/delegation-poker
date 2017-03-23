/* @flow */

import React from 'react';
import classnames from 'classnames';
import type { Level } from './App';
import './colors.css';
import './Level.css';

export type LevelProps = Level & {
  onClick: (level: Level) => void;
}

const LevelItem = ({ level, name, description, onClick }: LevelProps) => {
  const className = classnames('level', `level-${level}`);

  return (
    <li className={className} onClick={() => onClick({level, name, description})}>
      <h2 className="level-name">{name}</h2>
      <p className="level-description">{description}</p>
    </li>
  );
};

export default LevelItem;
