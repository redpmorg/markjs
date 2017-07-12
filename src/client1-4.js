import React from 'react';
import ReactDOM from 'react-dom';
// import createReactClass from 'create-react-class'
// import PropTypes from 'prop-types'

// var reactElement = Rect.createElement(MyElement); // return recat element
// var reactElement = <MyElement/> // jsx Style return react element
// ReactDOM.render(MyElement, DOM_NodeToMountOn)

export class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this._toggle = this._toggle.bind(this);
  };

  _toggle() {
      this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
      }));
  };

  render() {
    return (
      <div>
        <h1>Hello, me!</h1>
        <button className={ "btn " + (this.state.isToggleOn ? "btn-warning" : "btn-danger") } onClick={this._toggle}>
          {!this.state.isToggleOn ? this.props.clicked : this.props.click }
        </button>
      </div>
    )
  };
};

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h2>
          Current time is: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

var Hello4 = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {key: "default props world"}
  },
  render: function() {
    return (
      <div>{this.props.value}</div>
    );
  }
});
