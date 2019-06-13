import * as React from 'react';
import styles from './AppBar.css';
import * as MaterialUI from '@material-ui/core';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export const AppBar = (props: any) => {
  const { toggle, toggled } = props;

  const classes = useStyles({});

  return (
    <MaterialUI.AppBar className={classNames(classes.appBar)} color="default">
      <MaterialUI.Toolbar disableGutters={true}>
        <MaterialUI.Tooltip title={(toggled ? 'Hide ' : 'Show ') + 'sidebar'}>
          <MaterialUI.IconButton
            aria-label="open sidebar"
            className={classNames(classes.menuButton)}
            color="inherit"
            onClick={toggle}
          >
            <MenuIcon />
          </MaterialUI.IconButton>
        </MaterialUI.Tooltip>

        <MaterialUI.Typography variant="h6" color="inherit">
          Piximi
        </MaterialUI.Typography>
      </MaterialUI.Toolbar>
    </MaterialUI.AppBar>
  );
};
