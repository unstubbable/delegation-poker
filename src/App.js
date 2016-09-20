import React, { Component, PropTypes } from 'react';
import Level from './Level';
import Card from './Card';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { selectedLevel: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(level) {
    this.setState({ selectedLevel: level });
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Delegation Poker</h1>
        </header>
        {this.state.selectedLevel == null &&
          <ol className="levels">
            {this.props.levels.map((props, index) =>
              <Level
                {...props}
                key={props.name}
                level={index + 1}
                onClick={this.handleSelection}
              />
            )}
          </ol>
        }
        {this.state.selectedLevel &&
          <Card
            {...this.state.selectedLevel}
            onClick={() => this.handleSelection(null)}
          />
        }
      </div>
    );
  }
}

App.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

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
