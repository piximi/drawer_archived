import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { useDialog } from '@piximi/hooks';
import { SaveWeightsDialog } from "../../../../SaveWeightsDialog";

export const SaveWeightsMenuItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <MaterialUI.MenuItem onClick={openDialog}>
        <MaterialUI.ListItemText primary="Save weights" />
      </MaterialUI.MenuItem>

      <SaveWeightsDialog open={openedDialog} onClose={closeDialog} />
    </React.Fragment>
  );
};
