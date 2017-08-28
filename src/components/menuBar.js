import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const RouteMenu = props => {
    let routes = props.menu.map((item) => {
        let DynamicComponent = require(
                '../'
                + item.component.path
                + '/'
                + item.component.name).default;
        return <Route key={item.id}
                    path={item.route.url}
                    exact={item.route.exact}
                    render={() => (<DynamicComponent key={item.component.name} />)}
                  />;
      });
    return <div>{routes}</div>
}

const LinkMenu = props => {
    let {classes, menu} = props;
    let links = menu.map((item) =>
      <li key={item.id} className={classes.liMenu}>
        <Link key={item.id} to={item.route.url} className={classes.aMenu}>
          {item.label}
        </Link>
      </li>);
    return <ul className={classes.ulMenu}>{links}</ul>;
}

LinkMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

const MenuBar = props => {
  let {classes, menu} = props;
  menu.sort((a, b) => {
    return a['id'] > b['id']
      ? 1
      : -1;
  });
  return (
    <div className={classes.root}>
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <LinkMenu menu={menu} classes={classes}/>
            </Toolbar>
          </AppBar>
          <RouteMenu menu={menu}/>
        </div>
      </Router>
    </div>
  );
}

const stylesSheet = createStyleSheet('MenuBar', theme =>({
  root: {
    marginTop: '-8px',
    width: '100%',
    fontFamily: ['Roboto', 'Arial', 'Helvetica'],
  },
  flex: {
    flex: 1
  },
  ulMenu: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    },
  liMenu: {
    float: 'left',
    display: 'block',
    textAlign: 'center',
    padding: "14px 16px",
  },
  aMenu: {
    textDecoration: 'none',
    color: '#eeeeee'
  }
}));

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired
};

export default withStyles(stylesSheet)(MenuBar);
