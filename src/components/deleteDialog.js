import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dialog, {DialogTitle, DialogContent, DialogActions} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import DeleteForeverIcon from 'material-ui-icons/DeleteForever';
import {withStyles, createStyleSheet} from 'material-ui/styles';

class DeleteDialog extends Component {
  state = {open: false}

  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.open})
  }

  handleClose = (e) => {
    this.setState({open: false});
    this.props.handleDeleteDialog();
  };

  handleSubmit = (e) => {
    const selectedRecords  = this.props.selectedRecords;
    const path  = this.props.generalProps.url
                + this.props.generalProps.delete.uri;

    // ajax here with ${path}  {ids: [selectedRecords]}
    console.log(`These records will be erased: ${selectedRecords}
      and this it is the server path: ${path}`
    )

    // modify data. on ajax success, callback this.props.updateData():
    this.props.updateData(this, response);

    this.handleClose();
  }

  render() {
    const p = this.props.generalProps.delete;
    return (
      <Dialog
        ignoreBackdropClick
        ignoreEscapeKeyUp
        open = {this.state.open}
        // onEntered = {this.getSelectedRecords}
        className = {this.props.classes.dialog}
        >
          <DialogTitle className={this.props.classes.title}>
            <DeleteForeverIcon className={this.props.classes.titleIcon}/>
          </DialogTitle>
          <DialogContent className={this.props.classes.dialogDeleteContent}>
            <p>You are about to delete {this.props.selectedRecords.length > 1
            ? this.props.selectedRecords.length + ' rows'
            : '1 row'}!</p>
            <h2>{p.title}</h2>
            <p>{p.additionalText}</p>
          </DialogContent>
          <DialogActions className = {this.props.classes.actions}>
            <Button raised onClick = {this.handleSubmit} className={this.props.classes.redButton}> {p.submitLabel} </Button>
            <Button raised  onClick = {this.handleClose}> {p.cancelLabel} </Button>
          </DialogActions>
        </Dialog>
    )
  }
}

DeleteDialog.propTypes = {
  generalProps: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  selectedRecords: PropTypes.array.isRequired,
  handleDeleteDialog: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired
}

const styleSheet = createStyleSheet('DeleteDialog', theme => ({
    dialog: {
      width: '100%',
      maxHeight: 435,
      fontFamily: '"Roboto", "Arial"'
    },
    titleIcon: {
      color: theme.palette.error[700],
      width: '50%',
      height: '50%',
      verticalAlign: 'middle',
    },
    title: {
      textAlign: 'center',
      padding: 0
    },
    dialogDeleteContent: {
      textAlign: 'center',
    },
    redButton: {
        color: "#ffffff",
        backgroundColor: theme.palette.error[700],
    },
    actions: {
      paddingBottom: '1em',
      color: '#7e7e7e',
      justifyContent: 'center'
    }

}));

export default withStyles(styleSheet)(DeleteDialog);
