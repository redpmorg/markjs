import React from 'react';
import ReactDOM from 'react-dom';
import * as StyledLibrary from './client1-4.js';
import Helpers from './helpers.js'

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
    this._onSubmit = this._onSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    console.log('App component is mounted', this.props)
  }

  _onSubmit(e) {
    e.preventDefault();
    var value = Helpers.nodeFind(this).value;
    this.postToServer.apply(this, {
      url: 'myPage',
      data: [name : value]
    })
  }

  _onChange(e) {
    let value = e.target.value;
    this.setState(state => ({
      results: state.results.concat([value])
    }));
  }

  postToServer(data) {
    let self = this;
    $.ajax({
      url: data.url,
      dataType: 'json',
      cache: false,
      data: data.data,
      method: 'POST',
      success: function(response) {
        self.setState({msg: response.key});
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
            <label htmlFor="name">Name:</label>
            <input className="form-control " ref='name' type='text' placeholder='Enter name' name='name' onChange={this._onChange}/>
            <AutoSuggest results= { this.state.results } />
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
      <ul>
        { console.log(this.props) }
        { this.props.results.map((item, index) => (<li key={index}> {item} </li>))}
      </ul>
    )
  }
}

ReactDOM.render(
  <div>
  <StyledLibrary.Hello click="Click Me!" clicked="That's crazy! Click again!"/>
  <StyledLibrary.Clock/>
  <App myProps="myProps"/>
</div>, document.getElementById('one'));
