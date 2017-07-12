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
      msg: ''
    }
  }

  componentDidMount() {
    console.log('App component is mounted', this.props)
  }

  _onSubmit(e) {
    e.preventDefault();
    var value = Helpers.nodeFind(this).value;
    this.postToServer({
      url: 'myPage',
      data: [name : value]
    })
  }

  _onChange(e) {
    var value = e.target.value
    console.log(value)
  }

  postToServer(data) {
    let that = this;
    $.ajax({
      url: data.url,
      dataType: 'json',
      cache: false,
      data: data.data,
      method: 'POST',
      success: function(response) {
        that.setState({msg: response.key});
      },
      error: function(xhr, status, err) {
        that.setState({
          msg: xhr.status + ' ' + xhr.statusText
        });
      }
    });
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this._onSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className="form-control " ref='name' type='text' placeholder='Enter name' name='name' onChange={this._onChange}/>
          </div>
          <Submit name="Trimite" className="btn btn-primary" type="submit"/>
        </form>
        <label className="text-danger">{this.state.msg}</label>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
  <StyledLibrary.Hello click="Click Me!" clicked="That's crazy! Click again!"/>
  <StyledLibrary.Clock/>
  <App myProps="myProps"/>
</div>, document.getElementById('one'));
