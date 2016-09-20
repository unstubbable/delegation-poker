import React, { Component } from 'react';
import Level from './Level';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Delegation Poker</h1>
        </header>
        <ol className="levels">
          {this.props.levels.map((props, index) =>
            <Level
              key={props.name}
              level={index + 1}
              {...props}
            />
          )}
        </ol>
      </div>
    );
  }
}

App.defaultProps = {
  levels: [
    {
      name: 'Tell',
      description: 'Make the decision. You might explain your motivation. No discussion.'
    },
    {
      name: 'Sell',
      description: 'Make the decision. Try to convince others and help them feel involved.'
    },
    {
      name: 'Consult',
      description: 'Ask for input, take input into considaration, then decide.'
    },
    {
      name: 'Agree',
      description: 'Discuss until you reach consensus.'
    },
    {
      name: 'Advise',
      description: 'Offer input, let others decide.'
    },
    {
      name: 'Inquire',
      description: 'Leave decision to others, then ask them to convince/inform you. It’s their decision.'
    },
    {
      name: 'Delegate',
      description: 'Leave decision completely to others. Don’t want to know anything about it.'
    },
  ]
};

export default App;
