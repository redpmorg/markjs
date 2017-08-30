import React, {Component} from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

//Remove this after implement REST on back
import * as Model from '../data.js';

const fetchData = (config) => (Component) => {
  return function(config) {
    // let {url, method, returnType} = config;
    // axios({
    //   url:url,
    //   method: method,
    //   returnType: returnType
    // }).then(function(result){
        // let model = {model: result.model}
        let model = Model;
        return <Component model={model}/>;

    // });
  }
}

export default fetchData;
