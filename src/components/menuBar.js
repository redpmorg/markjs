import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Menu, {MenuItem} from 'material-ui/Menu';

const RouteMenu = props => {
  // parents
  let routes = props.menu.map((item) => {
    if(!item.hasChildren) {
      let DynamicComponent = require(`../${item.component.path}/${item.component.name}`).default;
      return <Route key={"menu-"+item.id}
        path={item.route.url}
        exact={item.route.exact}
        render={() => <DynamicComponent key={item.component.name + "-" + item.id}/>}
      />;
    } else {
      let children = item.hasChildren;
      children.map((item, idx, routes ) => {
        let DynamicComponent = require(`../${item.component.path}/${item.component.name}`).default;
        return <Route key={"menu-"+item.id}
          path={item.route.url}
          exact={item.route.exact}
          render={() => <DynamicComponent key={item.component.name + "-" + item.id}/>}
        />;
      })
    }
  });
  console.log(routes)
  return <div>{routes}</div>
}

class LinkMenu extends Component {
  state = {
    anchorEl: undefined,
    open: false
  }

  handleClick = (e) => {
    this.setState({open: true, anchorEl: e.currentTarget});
  }

  handleRequestClose = () => {
    this.setState({open: false});
  }

  render() {
    let {classes, menu} = this.props;
    let links = menu.map((item) => {

      let linkProps = {
        key: item.id,
        to: item.route.url,
        className: classes.aMenu
      }

      let menuName = 'menu-' + item.component.name;
      let MenuItemElement = '';
      const MenuItemLink = p => (
        <Link {...p}>
          {item.label}
        </Link>
      );

      if (item.hasChildren) {
        linkProps['aria-owns'] = this.state.open
          ? menuName
          : null;
        linkProps['aria-haspopup'] = true;
        linkProps['onClick'] = this.handleClick;

        let SubMenuItems = item.hasChildren.map(subitem => {
          return (
            <MenuItem key={'mi-' + subitem.id} onClick={this.handleRequestClose}>
              <Link {...linkProps} key={'li' + subitem.id} to={subitem.route.url}>{subitem.label}</Link>
            </MenuItem>
          );
        });

        let menuProps = {
          id: menuName,
          anchorEl: this.state.anchorEl,
          open: this.state.open,
          onRequestClose: this.handleRequestClose,
          className: classes.subMenuContainer
        }

        MenuItemElement = <div>
          {MenuItemLink(linkProps)}
          <Menu {...menuProps}>
            {SubMenuItems}
          </Menu>
        </div>;
      } else {
        MenuItemElement = MenuItemLink(linkProps);
      }

      return (
        <li key={item.id} className={classes.liMenu}>
          {MenuItemElement}
        </li>
      );
    }); //mapEnd

    return (
      <ul className={classes.ulMenu}>
        {links}
      </ul>
    );
  }
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

const stylesSheet = createStyleSheet('MenuBar', theme => ({
  root: {
    marginTop: '-8px',
    width: '100%',
    fontFamily: ['Roboto', 'Arial', 'Helvetica']
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
    padding: "14px 16px"
  },
  aMenu: {
    textDecoration: 'none',
    color: '#eeeeee'
  },
  subMenuContainer: {
    marginTop: "3.2rem",
    backgroundColor: "#2C99fe"
  }
}));

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired
};

export default withStyles(stylesSheet)(MenuBar);
