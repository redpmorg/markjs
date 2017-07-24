import React from 'react';
import ReactDOM from 'react-dom';
import * as StyledLibrary from './client1-4.js';
// import Helpers from './helpers.js'
var $ = require('jquery');

function Submit(props) {
  return (
    <button className={props.className} type={props.type}>{props.name}</button>
  )
}


// Lifting state up

function BoilingVerdict(props) {
    return <p>The water would { props.celsius >= 100 ? "not" : "" } boil.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
  }


  render() {
    const temperature = this.state.temperature;
    return(
      <div>
        <TemperatureInput scale="c"/>
        <TemperatureInput scale="f"/>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    )
  }
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
}


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ""
    }
  }

  handleChange = (e) => {
    this.setState({scale: e.target.value});
  }

  render() {
    const scale = this.state.scale;
    return(
      <fildset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={this.state.scale} onChange={this.handleChange}/>
      </fildset>
    )
  }
}


class LifeCycle extends React.Component {
   constructor(props) {
     super(props);
     console.log("constructor");
     this.state = {value: "the initial value"};
   }

   componentWillMount() {
     console.log("component will mounted");
   }

   componentDidMount() {
     console.log("component did mounted");
   }

   componentWillUpdate() {
     console.log("component will updated");
   }

   componentDidUpdate() {
     console.log("component did update");
   }

   componentWillUnmount() {
     console.log("component will unmounted");
   }

  _changeState = (e) => {
    this.setState({
      value: 'changed value'
    });
  }


  render() {
    console.log("render");
    return(
      <div>
          <button onClick={this._changeState}>Change State</button>
          <label>{ this.state.value}</label>
          <Child value={this.state.value} />
      </div>
    )
  }
}

class Child extends React.Component {
  componentWillReceiveProps() {
    console.log("Component will receive props");
  }

  render() {
    return null;
  }
}



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      msg: '',
      results: []
    }
    // this._onSubmit = this._onSubmit.bind(this);
    // this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    console.log('App component is mounted', this.props)
  }

  _onSubmit = (e) => {
    e.preventDefault();
    console.log(this.refs);
    var name = ReactDOM.findDOMNode(this.refs.name).value;
    this.postToServer(e.type, {
      url: 'myPage',
      data: [name : name]
    });
  }

  _onChange = (e) => {
    let value = e.target.value;
    this.postToServer(e.type, {url: 'get', data: value});
    // this.setState(state => ({
    //   results: state.results.concat([value])
    // }));
  }

  postToServer(scope, data) {
    let self = this;
    $.ajax({
      method: 'POST',
      contentType: "application/json",
      url: data.url,
      dataType: 'json',
      cache: false,
      data: data.data,
      dataType: "JSON",
      success: function(response) {
        if (scope == "change") {
          self.setState({results: response});
        } else if (scope == "submit") {
          self.setState({msg: response});
        }
      },
      error: function(xhr, status, err) {
        self.setState({
          msg: xhr.status + ' ' + xhr.statusText
        });
      }
    });
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this._onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className="form-control" ref='email' type='text' placeholder='Enter email' name='email' autoComplete="off"/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
              <input className="form-control" ref='name' type='text' placeholder='Enter name' name='name' onChange={this._onChange} autoComplete="off"/>
              <AutoSuggest results={this.state.results}/>
          </div>
          <Submit name="Trimite" className="btn btn-primary" type="submit"/>
        </form>
        <label className="text-danger">{this.state.msg}</label>
      </div>
    )
  }
}
class AutoSuggest extends React.Component {
  render() {
    return (
      <ul className="ui-autocomplete">
        {this.props.results.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
  )}
}

ReactDOM.render(
  <div>
    <LifeCycle />
    <StyledLibrary.Hello click="Click Me!" clicked="That's crazy! Click again!"/>
    <StyledLibrary.Clock/>
    <App myProps="myProps"/>
  </div>,
  document.getElementById('one')
);
