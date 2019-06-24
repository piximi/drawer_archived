import * as React from 'react';
import { styles } from './ApplicationDrawer.css';
import { makeStyles } from '@material-ui/styles';
import {
  ApplicationList,
  ClassifierList,
  DrawerAppBar,
  MiscellaneousList
} from '../index';
import { ConnectedCategoriesList } from '../CategoriesList/CategoriesList/ConnectedCategoriesList';
import { Divider, Drawer } from '@material-ui/core';

const useStyles = makeStyles(styles);

type DrawerProps = {
  toggled: boolean;
  toggle: () => void;
};

export const ApplicationDrawer = (props: DrawerProps) => {
  const classes = useStyles({});

  const { toggled, toggle } = props;

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
      open={toggled}
      variant="persistent"
    >
      <div className={classes.drawerHeader} />

      <DrawerAppBar toggle={toggle} toggled={toggled} />

      <ApplicationList />

      <Divider component={'hr'} />

      <ConnectedCategoriesList />

      <Divider component={'hr'} />

      <ClassifierList />

      <Divider component={'hr'} />

      <MiscellaneousList />
    </Drawer>
  );
};
