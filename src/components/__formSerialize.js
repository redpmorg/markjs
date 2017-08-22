
// just a fancy ideea to serialize the forms ...
export default class LoginView extends React.Component {
    handleSubmit(evt) {
        const formData = Array.from(evt.target.elements)
            .filter(el => el.name)
            .reduce((a, b) => ({...a, [b.name]: b.value}), {});
        console.log(formData);
        evt.preventDefault();
        return false;
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>...</form>)
    }
}
