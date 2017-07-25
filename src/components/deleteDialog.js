import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';

export default class DeleteDialog extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({open: true});
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
        actions = {actions}
        modal = {this.props.modal}
        open = {this.state.open}
        >
          {this.props.body}
        </Dialog>
    )
  }
}
