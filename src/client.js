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
    <StyledLibrary.Hello click="Click Me!" clicked="That's crazy! Click again!"/>
    <StyledLibrary.Clock/>
    <App myProps="myProps"/>
  </div>,
  document.getElementById('one')
);
