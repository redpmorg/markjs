import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import keycode from 'keycode';
// material-ui
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table from 'material-ui/Table';

//custom components
import DeleteDialog from '../deleteDialog.js'
import EnhancedTableToolbar from './enhancedTableToolbar.js'
import EnhancedTableHeader from './enhancedTableHeader.js'
import EnhancedTableBody from './enhancedTableBody.js'
import UltimatePagination from './ultimatePagination.js'
//data - this should be removed after cosntruct the REST

class EnhancedTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: props.columnProperties[0].id,
      selected: [],
      query: '',
      handleDeleteDialog: false,
      model: props.model,
      currentPage: 1,
      totalPages: 1,
      boundaryPagesRange: 1,
      siblingPagesRange: 1,
      hidePreviousAndNextPageLinks: false,
      hideFirstAndLastPageLinks: false,
      hideEllipsis: false
    };
    this.handleDeleteDialog = this.handleDeleteDialog.bind(this);
    this.onPageChangeFromPagination = this.onPageChangeFromPagination.bind(this);
  }

  componentWillMount(prevState) {
    const pages = this.state.model.length
                / this.props.tableGeneralProperties.rowsPerPage;
    this.setState({
      totalPages: parseInt(pages)
    })
  }

  componentWillUpdate() {
    //
  }

  handleRequestSort = (event, orderBy) => {
    let order = 'desc';

    //TOGGLE THE SORT ORDER
    if(this.state.orderBy === orderBy && this.state.order == 'desc') {
      order = 'asc'
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if(checked) {
      this.setState( {selected: this.state.model.map(n=>n.id)} );
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
    return this.props.columnProperties
      .filter(c => c['searchable'])
      .reduce((acc, cur) => {
         return acc.concat(cur['id']);
      },[]);
  }

  //this method will call an ajax to update the state.data
  // url/GET/data
  updateData = (e, data) => {
    // for testing purpose just
    data = [
        {id: 4, name: "daria", age: 6, sex: 'women', location: "constanta"},
        {id: 5, name: "luca", age: 3.3, sex: 'men', location: "constanta"},
      ];

      this.setState({model: data});
  }

  handleDeleteDialog(){
    this.setState({
      handleDeleteDialog: !this.state.handleDeleteDialog
    })
  }

  onPageChangeFromPagination(newPage) {
    // ajax here to modify the
    console.log(newPage)
     this.setState({currentPage: newPage});
   }

  render() {
    const {order, orderBy, model} = this.state;

    // sorting data
    model.sort((a,b) => {
      if ((order === 'desc')){
        if (a[orderBy] > b[orderBy]) {
          return -1;
        } else if(a[orderBy] < b[orderBy]) {
          return 1;
        } else {
          return 0;
        }
      }

      if ((order !== 'desc')){
        if (a[orderBy] < b[orderBy]) {
          return -1;
        } else if(a[orderBy] > b[orderBy]) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    return(
      <div>
        <DeleteDialog
          generalProps={this.props.tableGeneralProperties}
          open={this.state.handleDeleteDialog}
          selectedRecords = {this.state.selected}
          handleDeleteDialog = {this.handleDeleteDialog}
          updateData = {this.updateData}
        />
        <Paper className={this.props.classes.paper}>
          <EnhancedTableToolbar
            title = {this.props.tableGeneralProperties.tableTitle}
            numSelected={this.state.selected.length}
            handleDeleteDialog={this.handleDeleteDialog}
            doSearch = {this.doSearch}
          />
          <Table className={this.props.classes.table}>
            <EnhancedTableHeader
              classes = {this.props.classes}
              columnProperties = {this.props.columnProperties}
              order = {this.state.order}
              orderBy = {this.state.orderBy}
              onSelectAllClick = {this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
            />
            <EnhancedTableBody
              classes = {this.props.classes}
              data = {model}
              columnProperties = {this.props.columnProperties}
              query = {this.state.query}
              searchableColumns = {this.searchableColumns()}
              handleIsSelected = {this.handleIsSelected}
              handleClick = {this.handleClick}
              handleKeyDown = {this.handleKeyDown}
            />
          </Table>
          <div id="pagination" className={this.props.classes.pagination}>
            <UltimatePagination
              currentPage={this.state.currentPage}
              totalPages={this.state.totalPages}
              boundaryPagesRange={this.state.boundaryPagesRange}
              siblingPagesRange={this.state.siblingPagesRange}
              hidePreviousAndNextPageLinks={this.state.hidePreviousAndNextPageLinks}
              hideFirstAndLastPageLinks={this.state.hideFirstAndLastPageLinks}
              hideEllipsis={this.state.hideEllipsis}
              onChange={this.onPageChangeFromPagination}
            />
         </div>
        </Paper>
      </div>
    )}
  }

  EnhancedTable.propTypes = {
  }

  const styleSheet = createStyleSheet('EnhancedTable', theme => ({
    paper: {
      width: '100%',
      marginTop: theme.spacing.unit * 2,
      overflowX: 'auto',
      backgroundColor: '#e3e3e3'
    },
    table: {
      backgroundColor: '#ffffff',
    },
    header: {
      backgroundColor: theme.palette.primary[300],
    },
    rowHeight: {
      height: '30px'
    },
    pagination: {
      float: 'right',
      display: 'inline-block'
    }
  }));

export default withStyles(styleSheet)(EnhancedTable);
