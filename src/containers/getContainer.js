import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

//Remove this after implement REST on back
import {columnProperties, data} from '../data.js';


class FetchingDataContainer extends Component {
  constructor(props){
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.fetchProperties = this.fetchProperties.bind(this);
    this.state = {
      columnProperties: [],
      data: []
    };
  }

  fetchData(query){
    !PRODUCTION && console.log(
      // `container fetching data from...${this.props.config.url}${this.props.config.read.uri}`
      `container fetching data from...${this.props.config.read.uri}`
    );
    // let {url, method, returnType} = this.props.config;
    // let _this = this;
    // axios({
    //   url:url,
    //   method: method,
    //   returnType: returnType
    // }).then(function(result){
    //   _this.setState({
    //      data: result.data
    //  });
    // });

  }

  /* Calling this only at mounting element*/
  fetchProperties(){
    !PRODUCTION && console.log(
      `container fetching properties from...${this.props.config.read.uri}`
    );
    // let {url, method, returnType} = this.props.config;
    // let _this = this;
    // axios({
    //   url:url,
    //   method: method,
    //   returnType: returnType
    // }).then(function(result){
    //   _this.setState({
    //        columnProperties: result.columnProperties,
    //  });
    // });
  }

  componentWillMount() {
    this.fetchProperties();
    this.fetchData({page: 'first'});
    // remove this after
    this.setState({
      columnProperties: {columnProperties},
      data: {data}
    });
  }

  render() {
    const childrenWithProps = React.cloneElement(this.props.children,
          {
            columnProperties: this.state.columnProperties,
            tableGeneralProperties: this.props.config,
            data: this.state.data,
            fetchData: this.fetchData
          }
        );
    return <div>{childrenWithProps}</div>
  }
}

FetchingDataContainer.propTypes = {
  config: PropTypes.object.isRequired,
}

export default FetchingDataContainer;
