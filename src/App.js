/* @flow */

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import LevelItem from './Level';
import Card from './Card';
import './App.css';

export type Level = {
  level: number,
  name: string,
  description: string,
}

type AppProps = {
  levels: Level[];
}

class App extends Component {
  static defaultProps: AppProps = {
    levels: [
      {
        level: 1,
        name: 'Tell',
        description: 'Make the decision. You might explain your motivation. No discussion.'
      },
      {
        level: 2,
        name: 'Sell',
        description: 'Make the decision. Try to convince others and help them feel involved.'
      },
      {
        level: 3,
        name: 'Consult',
        description: 'Ask for input, take input into considaration, then decide.'
      },
      {
        level: 4,
        name: 'Agree',
        description: 'Discuss until you reach consensus.'
      },
      {
        level: 5,
        name: 'Advise',
        description: 'Offer input, let others decide.'
      },
      {
        level: 6,
        name: 'Inquire',
        description: 'Leave decision to others, then ask them to convince/inform you. It’s their decision.'
      },
      {
        level: 7,
        name: 'Delegate',
        description: 'Leave decision completely to others. Don’t want to know anything about it.'
      },
    ]
  };

  props: AppProps;

  state: {
    selectedLevel: ?Level;
  };

  constructor() {
    super();
    this.state = { selectedLevel: null };
  }

  handleSelection = (level: ?Level) => {
    this.setState({ selectedLevel: level });
  }

  render() {
    const className = classnames('app', {
      'app-standalone': typeof navigator !== 'undefined' && (navigator: any).standalone
    });

    return (
      <div className={className}>
        <h1 className="header">Delegation Poker</h1>
        <div className="content">
          <ol className="levels">
            {this.props.levels.map((props) =>
              <LevelItem
                {...props}
                key={props.name}
                onClick={this.handleSelection}
              />
            )}
          </ol>
          <ReactCSSTransitionGroup
            transitionName="card"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={150}
            component="div"
          >
            {this.state.selectedLevel &&
              <Card
                key="card"
                {...this.state.selectedLevel}
                onClick={() => this.handleSelection(null)}
              />
            }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
