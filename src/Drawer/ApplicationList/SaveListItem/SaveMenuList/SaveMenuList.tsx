import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import {
  SaveClassifierMenuItem,
  SaveAnnotationsAndPredictionsMenuItem,
  SaveWeightsMenuItem
} from '../../../index';

type Props = {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
};

export const SaveMenuList = (props: Props) => {
  const { anchorEl, onClose, open } = props;

  const anchorPosition = {
    top: open ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: open ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  return (
    <MaterialUI.Popover
      anchorPosition={anchorPosition}
      anchorReference="anchorPosition"
      onClose={onClose}
      open={open}
    >
      <MaterialUI.Paper>
        <MaterialUI.MenuList dense>
          <SaveClassifierMenuItem />

          <MaterialUI.Divider />

          <SaveAnnotationsAndPredictionsMenuItem />

          <SaveWeightsMenuItem />
        </MaterialUI.MenuList>
      </MaterialUI.Paper>
    </MaterialUI.Popover>
  );
};
