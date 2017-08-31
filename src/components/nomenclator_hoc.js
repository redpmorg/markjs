import React, {Component} from 'react';
import fetchData from '../HOC/fetchData.js';
import EnhancedTable from '../components/EnhancedTable/enhancedTable.js';

const Nomenclator = (props) => {
    // console.log(props);
    let model = props.model;
    return <EnhancedTable tableGeneralProperties={model.tableGeneralProperties}
             columnProperties={model.columnProperties}
             model={model.data}/>;
};

let cfg = {
  url: 'http://bla.bla',
  method: "GET",
  returnType: "JSON"
}

export default fetchData(cfg)(Nomenclator);
