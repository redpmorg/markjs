import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import keycode from 'keycode';
// material-ui
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import EnhancedTableToolbar from './enhancedTableToolbar.js'
import EnhancedTableHeader from './enhancedTableHeader.js'

class EnhancedTable extends Component {
  state = {
    order: 'asc',
    orderBy: 'name',
    selected: [],
    initialData: this.props.data.data.data,
    data: [],
    columnProperties: this.props.data.data.columnProperties
  };


  constructor(props) {
    super(props);
    this.state.data = this.state.initialData;
  }

  handleRequestSort = (event, property, numeric) => {
    //property = column name
    const orderBy = property;
    let order = 'desc';

    //TOGGLE THE SORT ORDER
    if(this.state.orderBy === property && this.state.order == 'desc') {
      order = 'asc'
    }

    const data = this.state.data.sort(
      (a,b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy])
    );

    this.setState({ data, order, orderBy });
  };


  handleSelectAllClick = (event, checked) => {
    if(checked) {
      this.setState( {selected: this.state.data.map(n=>n.id)} );
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
    const { selected } = this.state;
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

    // console.dir(`
    //   id: ${id},
    //   selected: [${selected}],
    //   selectedIndex: ${selectedIndex},
    //   newSelected: [${newSelected}]`)

      this.setState({selected: newSelected});
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  doSearch = (e) => {
    let query = e.target.value;
    let data = this.state.data;
    Object.keys(data).forEach((k) => console.log(data[k]))
  }


  //--- experimantal
  wipeJSONData = (e) => {
    this.setState({
      data: this.props.data.dataExperimental.data,
      columnProperties: this.props.data.dataExperimental.columnProperties
    });
    console.log('wiping')
  }
  //--- experimantal



  render() {
    const classes = this.props.classes;
    const { data, columnProperties, order, orderBy, selected } = this.state;

    return(
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          wipeJSONData = {this.wipeJSONData}
          doSearch = {this.doSearch}
        />
        <Table>
          <EnhancedTableHeader
            className = {classes}
            order = {order}
            orderBy = {orderBy}
            onSelectAllClick = {this.handleSelectAllClick}
            onRequestSort={this.handleRequestSort}
            columnProperties = {columnProperties}
          />
            <TableBody>
              {data.map(n => {
                const isSelected = this.isSelected(n.id);
                return (
                  <TableRow className = {classes.miniCol}
                    hover
                    onClick = {e => this.handleClick(e, n.id)}
                    onKeyDown = {e => this.handleKeyDown(e,n.id)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex = "-1"
                    key={n.id}
                    selected = {isSelected}
                    >

                      <TableCell checkbox >
                        <Checkbox checked = {isSelected} className = {classes.miniCol}/>
                      </TableCell>

                      {Object.keys(n).map(
                        (key, idx) => {
                            if (idx !== 0) {
                              let cd = columnProperties[idx-1],
                              k = cd['id'];
                              if (key === k) {
                                return (
                                  <TableCell key={idx} numeric={cd.numeric} disablePadding = {cd.disablePadding} >
                                    {n[key]}
                                  </TableCell>
                                )
                              }
                            }
                          }
                        )
                      }
                    </TableRow>
                )
              })}
            </TableBody>
        </Table>
      </Paper>
    )}
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
  miniCol: {
    height: '30px'
  }

}));

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(EnhancedTable);
