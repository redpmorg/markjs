import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
// import Icon from 'material-ui/Icon';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import AddIcon from 'material-ui-icons/Add';
import DoneIcon from 'material-ui-icons/Done';
import DoneAllIcon from 'material-ui-icons/DoneAll';
import TextField from 'material-ui/TextField';


class EnhancedTableToolbar extends Component {

render() {
  const {title, numSelected, classes, doSearch} = this.props;
  return (
    <Toolbar
      className = {classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
      >
        <div className = {classes.title}>
          {numSelected > 0
            ? <Typography
                type="subheading">
                {numSelected === 1
                  ? <DoneIcon className={this.props.classes.smallIconsToolbar}/>
                  : <DoneAllIcon className={this.props.classes.smallIconsToolbar}/>
                }
                {numSelected} {numSelected > 1 ? 'rows' : 'row'} selected
              </Typography>
            : <Typography type="title">
                {title}
                <div>
                  <TextField placeholder="search..." style={{fontSize: '11px', width: '100%'}} onChange={this.props.doSearch}>
                </TextField>
                {/* <IconButton className={this.props.classes.smallIconsToolbar}>x</IconButton> */}
                </div>
              </Typography>
          }
        </div>
        <div className={classes.spacer} />
          {numSelected > 0
          ?
          <div className={classes.actions}>
            <Button fab aria-label="Delete" className = {classes.button} >
                <DeleteIcon onClick={this.props.handleDeleteDialog}/>
            </Button>
            {numSelected === 1 &&
              <Button fab aria-label="Edit" className={classes.button}>
                  <EditIcon/>
              </Button>
            }
          </div>
          :
          <div className={classes.actions}>
            <Button fab color='primary' aria-label="Add" className={classes.button} >
               <AddIcon />
            </Button>
          </div>
          }
      </Toolbar>
  )
}
}

EnhancedTableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  doSearch: PropTypes.func.isRequired,
  handleDeleteDialog: PropTypes.func.isRequired
}


const toolbarStyleSheet = createStyleSheet('EnhancedTableToolbar', theme => ({
  root: {
    paddingRight: 2,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.accent.A100,
          backgroundColor: theme.palette.accent.A600,
        }
      : {
          color: theme.palette.accent.A100,
          backgroundColor: theme.palette.accent.A700,
        },
  spacer: {
    flex: '1 1 auto',
  },
  smallIconsToolbar: {
    verticalAlign: 'middle',
    marginRight: "1em",
    fontSize: '14px'
  },
  actions: {
    color: theme.palette.text.secondary,
    flex: '0 0 auto'
  },
  title: {
    flex: '0 0 auto',
  },
  button: {
    margin: theme.spacing.unit,
    width: theme.spacing.unit * 5,
    height: theme.spacing.unit * 5
  }
}));

export default withStyles(toolbarStyleSheet)(EnhancedTableToolbar);
