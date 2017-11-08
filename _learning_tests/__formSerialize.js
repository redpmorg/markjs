// the classic way... improved somehow
export default class FormView extends Component {
  handleSubmit(formData) {
    console.log("Logging: ", formData, 'sending with ajax!');
  }
  render() {
    let formData={};
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.handleSubmit(formData);
        e.target.reset();
      }}>
        <input type="text" name="myInput" ref={node => formData.myInput = node.value}/>
        {/* my form elements */}
      </form>
    );
  }
}

// Just a fancy ideea to serialize the forms ...
export default class FormView extends Component {
    handleSubmit(e) {
        const formData = Array.from(e.target.elements)
            .filter(el => el.name)
            .reduce((a, b) => ({...a, [b.name]: b.value}), {});
        e.preventDefault();
        console.log("Logging: ", formData, 'sending with ajax!');
        e.target.reset();
        return false;
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            {/* my form elements */}
          </form>
      )
    }
}


// composition by HOC
export handleForm = (_Form) => class extends Component {
  handleSubmit(e) {
    const formData = Array.from(e.target.elements)
        .filter(el => el.name)
        .reduce((a, b) => ({...a, [b.name]: b.value}), {});
    e.preventDefault();
    console.log(`Logging: ${formData} will be sending to`);
    e.target.reset();
    return false;
  }

  render() {
    return <_Form handleForm={this.handleForm}/>
  }
}

handleForm.propTypes = {
  _Form: PropTypes.object.isRequired,
}
