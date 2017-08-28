import React, {Component} from 'react';
import EnhancedTable from '../components/EnhancedTable/enhancedTable.js';
import {AjaxGetContainer as NomenclatorContainer} from '../containers/ajaxGetContainer.js';
import PropTypes from 'prop-types';


!!! Da e vremea sa gandesti! ... GANDESTE GANDESTE GANDESTE

const Nomenclator = (props, context) => {
  console.log(context);
    let model = context.model;
    return(
        <NomenclatorContainer>
          <EnhancedTable
            tableGeneralProperties={model.tableGeneralProperties}
            columnProperties={model.columnProperties}
            model={model.context.data}/>
        </NomenclatorContainer>
  );
};

Nomenclator.contextType = {
  model: PropTypes.object
}

export default Nomenclator;
