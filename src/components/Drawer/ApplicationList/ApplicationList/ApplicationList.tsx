import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { NewClassifierListItem } from '../..';
import {
  ConnectedOpenListItem,
  ConnectedSaveListItem
} from '../../../../containers';

export const ApplicationList = () => {
  return (
    <MaterialUI.List dense>
      <NewClassifierListItem />

      <ConnectedOpenListItem />

      <ConnectedSaveListItem />
    </MaterialUI.List>
  );
};
