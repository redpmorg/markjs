import React, {Component} from 'react';
import {axios as fetchData} from 'axios';
import PropTypes from 'prop-types';
//after test, fetch container data with ajax before componentDidMount
import * as Model from '../data.js';

const provideContext = (childContextType, getChildContext) => (Component) => {
  class ContextProvider extends Component {
    //   state = {model: []}
    //
    //   componentDidMount() {
    //     console.log('mounted')
    //     // let cnf = this.props.config;
    //     // fetchData({
    //     //   method: 'get',
    //     //   url: cnf.url,
    //     //   responseType: cnf.responseType
    //     // }).then(function(response) {
    //     //   this.setState({
    //     //     model: response.model
    //     //   });
    //     // });
    //     this.setState({
    //       model: Model
    //     });
    //   }

    static childContextType = childContextType;
    getChildContext = () => getChildContext(this.props);

    render() {
      return <Component {..this.props}/>;
    }

    return ContextProvider;
  }
}


const consumeContext = (contextTypes) => (Component) => {
  const ContextConsumer = (props, context) =>
      <Component {...props} {..context}/>;
  ContextConsumer.contextTypes = contextTypes;

  return ContextConsumer;
}


// class AjaxGetContainer extends Component {
//   state = {model: []}
//
//   componentDidMount() {
//     console.log('mounted')
//     // let cnf = this.props.config;
//     // fetchData({
//     //   method: 'get',
//     //   url: cnf.url,
//     //   responseType: cnf.responseType
//     // }).then(function(response) {
//     //   this.setState({
//     //     model: response.model
//     //   });
//     // });
//     this.setState({
//       model: Model
//     });
//   }
//
//   getChildContext() {
//     console.log('context')
//     return {model: Model};
//   }
//
//   render() {
//     return(
//       <div>
//         {this.props.children}
//       </div>
//     );
//   }
// }
//
// AjaxGetContainer.childContextType = {
//   model: PropTypes.object
// }
//
// // AjaxGetContainer.propTypes = {
// //   config: PropTypes.object.isRequired,
// // }
//
// export default AjaxGetContainer;
