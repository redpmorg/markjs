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

const EnhancedTableHead = props => {

  const {
    onRequestSort,
    onSelectAllClick,
    order,
    orderBy,
    columnProperties,
    classes} = props;

  const createSortHandler = property => e => {
    onRequestSort(e, property);
  }

    return(
      <TableHead className = {classes.header}>
        <TableRow className = {classes.rowHeight}>
          <TableCell checkbox>
            <Checkbox onChange={onSelectAllClick} className = {classes.rowHeight} />
          </TableCell>
          {columnProperties.map(column => {
            return (
            <TableCell
              key={column.id}
              numeric={column.numeric}
              disablePadding = {column.disablePadding}>
              <TableSortLabel active={orderBy === column.id}
                direction = {order}
                onClick={createSortHandler(column.id)}
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

EnhancedTableHead.PropTypes = {
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    columnProperties: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default EnhancedTableHead;
