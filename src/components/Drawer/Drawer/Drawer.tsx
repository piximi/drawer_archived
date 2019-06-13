import * as MaterialUI from '@material-ui/core';
import * as React from 'react';
import styles from './Drawer.css';
import { makeStyles } from '@material-ui/styles';
import { AppBar, ApplicationList, ClassifierList, MiscellaneousList } from '..';
import { ConnectedCategoriesList } from '../../../containers/Drawer';

const useStyles = makeStyles(styles);

export const Drawer = (props: any) => {
  const classes = useStyles({});

  const { setUnlabelledVisibility, toggled, toggle } = props;

  return (
    <MaterialUI.Drawer
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
      open={toggled}
      variant="persistent"
    >
      <div className={classes.drawerHeader} />

      <AppBar toggle={toggle} toggled={toggled} />

      <ApplicationList />

      <MaterialUI.Divider />

      <ConnectedCategoriesList
        setUnlabelledVisibility={setUnlabelledVisibility}
      />

      <MaterialUI.Divider />

      <ClassifierList />

      <MaterialUI.Divider />

      <MiscellaneousList />
    </MaterialUI.Drawer>
  );
};
