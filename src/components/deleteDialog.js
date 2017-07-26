import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';

class DeleteDialog extends Component {
  state = {
    open: this.props.open
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <Button
        raised
        label = "Cancel"
        primary = {true}
        onTouchTap = {this.handleClose}
      />,
      <Button
        rasised
        label = "Submit"
        primary = {true}
        disabled = {true}
        onTouchTap = {this.handleClose}
      />
    ];

    return (
      <Dialog
        title = {this.props.title}
        modal = {this.props.modal}
        open = {this.props.open}
        >
          stergggg!
        </Dialog>
    )
  }
}

DeleteDialog.propTypes = {
  title: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
}

export default DeleteDialog;
