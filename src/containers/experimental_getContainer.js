// class AjaxGetContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: []
//     }
//   }
//
//   componentDidMount() {
//     console.log(this.props.config);
//     // let {url, method, returnType} = this.props.config;
//     // fetchData({
//     //   url:url,
//     //   method: method,
//     //   returnType: returnType
//     // }).then(function(result){
//     //   return {model: result.model}
//     // });
//     this.setState({
//       model : Model
//     });
//   }
//   render() {
//     const childrenWithProps = React.Children.map(this.props.children,
//       (child) => React.cloneElement(child, {
//         model: this.state.model
//       })
//     );
//
//     /* And a more simple approach for SingleElement */
//     // const childrenWithProps =
//     //       React.cloneElement(this.props.children, {model: this.state.model});
//
//     return <div>{childrenWithProps}</div>
//   }
// }
//
// AjaxGetContainer.propTypes = {
//   config: PropTypes.object.isRequired,
// }
//
// export default AjaxGetContainer;
