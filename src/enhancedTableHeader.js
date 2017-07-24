import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

export default class EnhancedTableHead extends Component {
  static propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
  }

  createSortHandler = (property, numeric) => e => {
    this.props.onRequestSort(e, property, numeric);
  }

  render() {
    const {onSelectAllClick, order, orderBy, columnProperties} = this.props;

    return(
      <TableHead className = {this.props.className.header}>
        <TableRow className = {this.props.className.miniCol}>
          <TableCell checkbox>
            <Checkbox onChange={onSelectAllClick} className = {this.props.className.miniCol} />
          </TableCell>
          {columnProperties.map(column => {
            return (
            <TableCell
              key={column.id}
              numeric={column.numeric}
              disablePadding = {column.disablePadding}>
              <TableSortLabel active={orderBy === column.id}
                direction = {order}
                onClick={this.createSortHandler(column.id, column.numeric)}
                >
                {column.label}
              </TableSortLabel>
            </TableCell>
            )
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}
