import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import menu from './../data.js';

const withMenu = (App) => class extends Component {
  render() {
    console.log(menu);
    return (
      <div className="Leonard">
        { App }
      </div>
    );
  }
}

export default withMenu;
