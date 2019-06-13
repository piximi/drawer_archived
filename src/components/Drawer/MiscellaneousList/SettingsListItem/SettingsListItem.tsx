import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDialog } from '@piximi/hooks';

export const SettingsListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <ListItem dense button disabled onClick={openDialog}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>

        <ListItemText primary="Settings" />
      </ListItem>

      <SettingsDialog onClose={closeDialog} open={openedDialog} />
    </React.Fragment>
  );
};
