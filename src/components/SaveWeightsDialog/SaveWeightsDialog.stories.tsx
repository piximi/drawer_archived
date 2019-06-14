import React from 'react';
import { storiesOf } from '@storybook/react';
import { SaveWeightsDialog } from '..';
import {useDialog} from "@piximi/hooks";
import { Button } from "@material-ui/core";

storiesOf('SaveWeightsDialog', module).add('example', () => React.createElement(() => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <Button onClick={openDialog}>
        Open dialog
      </Button>

      <SaveWeightsDialog open={openedDialog} onClose={closeDialog}/>
    </React.Fragment>
  )
}));
