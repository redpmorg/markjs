import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  TableBody,
  TableCell,
  TableRow,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

const EnhancedTableBody = props => {
  const {
    data, columnProperties,
    query, searchableColumns, classes,
    handleIsSelected, handleClick,
    handleKeyDown, order, orderBy } = props;

  data.sort(
      (a,b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy])
  );


  return (
    <TableBody>
      {/* object rows iterate */}
      {data.map(row => {

        // search on data. if not exist return
        if (searchableColumns.reduce((acc, cur) => {
            return acc && (row[cur].toString().toLowerCase().indexOf(query) === -1)
          }, 1)) {
            return;
          }

        const isSelected = handleIsSelected(row.id);

        return (
          <TableRow className = {classes.rowHeight}
          hover
          onClick = {e => handleClick(e, row.id)}
          onKeyDown = {e => handleKeyDown(e, row.id)}
          role="checkbox"
          aria-checked={isSelected}
          tabIndex = "-1"
          key={row.id}
          selected = {isSelected}
          >
            <TableCell checkbox >
              <Checkbox checked = {isSelected} className = {classes.rowHeight}/>
            </TableCell>
            {/* columns iterate */}
            {Object.keys(row).map(
              (column, idx) => {
                  if (idx !== 0) {
                    let cp = columnProperties[idx-1],
                    colID = cp['id'];
                    if (column === colID) {

                      return (
                        <TableCell key={idx} numeric={cp.numeric} disablePadding = {cp.disablePadding} >
                          {row[column]}
                        </TableCell>
                      )}
                  }
                })
            }
        </TableRow>
      )}
    )}
    </TableBody>
  )
}

EnhancedTableBody.PropTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  columnProperties: PropTypes.object.isRequired,
  handleIsSelected: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  searchableColumns: PropTypes.array.isRequired
}

export default EnhancedTableBody;
