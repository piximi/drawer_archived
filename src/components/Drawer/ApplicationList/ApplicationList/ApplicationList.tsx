import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import {NewClassifierListItem} from "../..";
import {
  ConnectedOpenListItem,
  ConnectedSaveListItem
} from "../../../../containers/Drawer";

export const ApplicationList = (props: any) => {
  return (
    <MaterialUI.List dense>
      <NewClassifierListItem/>

      <ConnectedOpenListItem />

      <ConnectedSaveListItem />
    </MaterialUI.List>
  );
};
