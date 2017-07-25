import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';


const styleSheet = createStyleSheet('RaisedButtons', theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
}));

const RaisedButtons =  (props) => {
  const classes = props.classes;

  return (
    <Button className={classes.button} aria-label="Add" onClick = {props.onClick}>
      <AddIcon/>
    </Button>
    );
}

RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(RaisedButtons);
