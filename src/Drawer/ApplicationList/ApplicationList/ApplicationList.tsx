import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import {ConnectedOpenListItem} from "../OpenListItem/OpenListItem";
import {NewClassifierListItem} from "../NewClassifierListItem";
import {ConnectedSaveListItem} from "../SaveListItem/SaveListItem";

export const ApplicationList = () => {
  return (
    <MaterialUI.List dense>
      <NewClassifierListItem />

      <ConnectedOpenListItem />

      <ConnectedSaveListItem />
    </MaterialUI.List>
  );
};
