import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import keycode from 'keycode';
// material-ui
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table from 'material-ui/Table';
import EnhancedTableToolbar from './enhancedTableToolbar.js'
import EnhancedTableHeader from './enhancedTableHeader.js'
import EnhancedTableBody from './enhancedTableBody.js'


class EnhancedTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'name',
      selected: [],
      query: ''
    };
  }

  handleRequestSort = (event, property) => {
    //property = column name
    const orderBy = property;
    let order = 'desc';

    //TOGGLE THE SORT ORDER
    if(this.state.orderBy === property && this.state.order == 'desc') {
      order = 'asc'
    }

    this.setState({ order, orderBy });
  };


  handleSelectAllClick = (event, checked) => {
    if(checked) {
      this.setState( {selected: this.props.model.json.data.map(n=>n.id)} );
      return;
    }
    this.setState({selected: []})
  };


  handleKeyDown = (event,id) => {
    if(keycode(event) === "space") {
      this.handleClick(event, id);
    }
  }

  handleClick = (event, id) => {
    const selected = this.state.selected;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if(selectedIndex === -1) {
      // if not exist in selected array just add it
      newSelected = newSelected.concat(selected, id);
    } else if(selectedIndex === 0) {
      // if it is first in list deleted
      newSelected = newSelected.concat(selected.slice(1));
    } else if(selectedIndex === selected.length - 1) {
      // if it is last in list deleted
      newSelected = newSelected.concat(selected.slice(0,-1));
    } else if(selectedIndex > 0) {
      // if it is in list eliminated
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    this.setState({selected: newSelected});
  }

  handleIsSelected = id => this.state.selected.indexOf(id) !== -1;

  doSearch = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  searchableColumns = (e) => {
    return this.props.model.json.columnProperties
      .filter(c => c['searchable'])
      .reduce((acc, cur) => {
         return acc.concat(cur['id']);
      },[]);
  }

  render() {
    return(
      <Paper className={this.props.classes.paper}>
        <EnhancedTableToolbar
          title = {this.props.title}
          numSelected={this.state.selected.length}
          doSearch = {this.doSearch}
        />
        <Table>
          <EnhancedTableHeader
            classes = {this.props.classes}
            order = {this.state.order}
            orderBy = {this.state.orderBy}
            onSelectAllClick = {this.handleSelectAllClick}
            onRequestSort={this.handleRequestSort}
            columnProperties = {this.props.model.json.columnProperties}
          />
          <EnhancedTableBody
            classes = {this.props.classes}
            data = {this.props.model.json.data}
            order = {this.state.order}
            orderBy = {this.state.orderBy}
            query = {this.state.query}
            searchableColumns = {this.searchableColumns()}
            columnProperties = {this.props.model.json.columnProperties}
            handleIsSelected = {this.handleIsSelected}
            handleClick = {this.handleClick}
            handleKeyDown = {this.handleKeyDown}
          />
        </Table>
      </Paper>
    )}
  }



  EnhancedTable.propTypes = {
    model: PropTypes.object.isRequired
  }

  const styleSheet = createStyleSheet('EnhancedTable', theme => ({
    paper: {
      width: '100%',
      marginTop: theme.spacing.unit * 6,
      overflowX: 'auto'
    },
    header: {
      backgroundColor: theme.palette.primary[100],
    },
    rowHeight: {
      height: '30px'
    }
  }));

export default withStyles(styleSheet)(EnhancedTable);
