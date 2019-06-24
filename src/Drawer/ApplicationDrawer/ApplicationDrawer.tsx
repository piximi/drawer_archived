import * as MaterialUI from '@material-ui/core';
import * as React from 'react';
import { styles } from './ApplicationDrawer.css';
import { makeStyles } from '@material-ui/styles';
import {
  DrawerAppBar,
  ApplicationList,
  ClassifierList,
  MiscellaneousList
} from '../index';
import { ConnectedCategoriesList } from '../CategoriesList/CategoriesList/ConnectedCategoriesList';

const useStyles = makeStyles(styles);

type DrawerProps = {
  toggled: boolean;
  toggle: () => void;
};

export const ApplicationDrawer = (props: DrawerProps) => {
  const classes = useStyles({});

  const { toggled, toggle } = props;

  return (
    <MaterialUI.Drawer
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
      open={toggled}
      variant="persistent"
    >
      <div className={classes.drawerHeader} />

      <DrawerAppBar toggle={toggle} toggled={toggled} />

      <ApplicationList />

      <MaterialUI.Divider component={'hr'} />

      <ConnectedCategoriesList />

      <MaterialUI.Divider component={'hr'} />

      <ClassifierList />

      <MaterialUI.Divider component={'hr'} />

      <MiscellaneousList />
    </MaterialUI.Drawer>
  );
};
