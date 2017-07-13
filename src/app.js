import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactBootstrap from 'react-bootstrap';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  getValidationState() {
    const length = this.state.value.length
    if (length > 10) {
      return "success";
    } else if (length > 5) {
      return "warning";
    } else if (length > 0) {
      return "error";
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  getFormValues = (e) => {
    var o = {};
    Object.keys(this.refs)
    .map(key => o[key] = ReactDOM.findDOMNode(this.refs[key]).value);
    console.log(o)
  }

  render() {
    return (
      <form>
        <ReactBootstrap.FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
          <ReactBootstrap.ControlLabel> Working example with validation </ReactBootstrap.ControlLabel>
          <ReactBootstrap.FormControl type="text" placeholder="Enter text" ref="text1" />
          <ReactBootstrap.FormControl type="text" placeholder="Enter text" ref="text2"/>
          <ReactBootstrap.FormControl.Feedback />
          <ReactBootstrap.HelpBlock> Validation is based on strings length! </ReactBootstrap.HelpBlock>
        </ReactBootstrap.FormGroup>
        <ReactBootstrap.Button onClick={this.getFormValues}>Trimite</ReactBootstrap.Button>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('one'))
