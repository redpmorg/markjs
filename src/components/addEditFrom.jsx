import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles, createStyleSheet } from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import axios from 'axios';


//working in progress ...
class AddEditForm extends Component {
  contructor(props) {
    super(props);
    this.state = {

    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const formData = Array.from(e.target.elements)
        .filter(el => el.name)
        .reduce((a, b) => ({...a, [b.name]: b.value}), {});
    this.handleSubmit(formData);
    return false;
  }

  handleSubmit = (formData) => {

    console.log(formData);
    axios({
      method: 'post',
      baseURL: this.props.generalProps.url,
      url: this.props.generalProps.delete.uri,
      data: formData,
      responseType: 'json',
    }).then((response) => {
        console.log(response);
    }, (err) => {
      console.log(err);
    });
  }

  render(){
    return (
      <From onSubmit={this.onSubmit}>

      </From>
    )
  }
}
