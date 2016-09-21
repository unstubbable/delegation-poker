import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import FastClick from 'fastclick';
import Level from './Level';
import Card from './Card';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { selectedLevel: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentWillMount() {
    if (window.navigator.standalone) {
      // In standalone mode (added to home screen) we still need
      // FastClick to avoid the good old 300ms tap delay.
      this.fastClick = new FastClick(document.body);
    } else {
      // Allow :active styles to work in mobile browsers.
      document.addEventListener('touchstart', function(){}, true);
    }
  }

  componentWillUnmount() {
    if (this.fastClick) {
      this.fastClick.destroy();
    }
  }

  handleSelection(level) {
    this.setState({ selectedLevel: level });
  }

  render() {
    const className = classnames('app', {
      'app-standalone': window.navigator.standalone
    });

    return (
      <div className={className}>
        <h1 className="header">Delegation Poker</h1>
        <div className="content">
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
