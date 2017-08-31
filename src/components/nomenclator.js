import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import fetchData from '../HOC/fetchData.js';
import FetchingDataContainer from '../containers/getContainer';
import EnhancedTable from '../components/EnhancedTable/enhancedTable.js';

const cfg = {
  url: 'http://127.0.0.1:80',
  tableTitle: 'Nomenclator A',
  rowsPerPage: 5,
  create: {
    uri: '/nomenclator_a/add/',
    title: 'Adding new record',
    additionalText: 'adding is fun',
    submitLabel: 'Add',
    cancelLabel: 'Cancel'
  },
  read: {
    uri: '/nomenclator_a',
  },
  update: {
    uri: '/nomenclator_a/edit/',
    title: 'Modify your data',
    additionalText: 'modify is not a pure function',
    submitLabel: 'Edit',
    cancelLabel: 'Cancel'

  },
  delete: {
    uri: "/nomenclator_a/delete/",
    title: 'Are you sure?',
    additionalText: 'wiping data is irreversible',
    submitLabel: 'Yes',
    cancelLabel: 'No'
  }
}

const Nomenclator = () => {
  return (
    <FetchingDataContainer config={cfg}>
      <EnhancedTable/>
    </FetchingDataContainer>
  );
}

export default Nomenclator;

/* Fetching data With HOC */
// const Nomenclator = (props) => {
//     let model = props.model;
//     return <EnhancedTable tableGeneralProperties={model.tableGeneralProperties}
//              columnProperties={model.columnProperties}
//              model={model.data}/>;
// };
//
// export default fetchData(cfg)(Nomenclator);
