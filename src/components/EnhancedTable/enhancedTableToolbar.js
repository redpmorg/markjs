import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';
import DeleteDialog from '../deleteDialog.js'

const EnhancedTableToolbar = props => {
  const {title, numSelected, classes, doSearch} = props;

  return (
    <Toolbar
      className = {classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
      >
        <div className = {classes.title}>
          {numSelected > 0
            ? <Typography
                type="subheading">{numSelected}
                {numSelected > 1 ? 'rows' : 'row'} selected
              </Typography>
            : <Typography type="title">
                {title}
                <div>
                  <TextField placeholder="search..." style={{fontSize: '11px'}} onChange={props.doSearch}/>
                </div>
              </Typography>
          }
        </div>
        <div className={classes.spacer} />
          {numSelected > 0
          ?
          <div className={classes.actions}>
            <IconButton aria-label="Delete" >
                <DeleteIcon/>
            </IconButton>
            {numSelected === 1 &&
              <IconButton aria-label="Edit">
                  <EditIcon/>
              </IconButton>
            }
          </div>
          :
          <div className={classes.actions}>
            <IconButton aria-label="Add" list>
               <AddIcon />
            </IconButton>
          </div>
          }
      </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  doSearch: PropTypes.func.isRequired
}


const toolbarStyleSheet = createStyleSheet('EnhancedTableToolbar', theme => ({
  root: {
    paddingRight: 2,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.accent.A700,
          backgroundColor: theme.palette.accent.A100,
        }
      : {
          color: theme.palette.accent.A100,
          backgroundColor: theme.palette.accent.A700,
        },
  spacer: {
    flex: '1 1 auto',

  },
  actions: {
    color: theme.palette.text.secondary,
    flex: '0 0 auto'
  },
  title: {
    flex: '0 0 auto',
  },
}));

export default withStyles(toolbarStyleSheet)(EnhancedTableToolbar);
