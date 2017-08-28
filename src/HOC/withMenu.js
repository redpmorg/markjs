import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuBar from '../components/menuBar';

import {menuTop as menu} from '../data.js';

/* UNUSED */

const withMenu = (App) => class extends Component {
  render(){
    return (
        <div>
          <MenuBar menu={menu}/>
          { App }
        </div>
    );
  }
}

withMenu.propTypes = {
  App: PropTypes.object.isRequired,
}

export default withMenu;
