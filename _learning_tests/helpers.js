import ReactDOM from 'react-dom';

class Helpers {
  //find and return DOM node
  static nodeFind(that) {
    return ReactDOM.findDOMNode(that.refs.name)
  }
}

export default Helpers;
