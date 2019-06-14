import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { HelpListItem, SendFeedbackListItem, SettingsListItem } from '../../index';

export const MiscellaneousList = () => {
  return (
    <MaterialUI.List dense>
      <SettingsListItem />

      <SendFeedbackListItem />

      <HelpListItem />
    </MaterialUI.List>
  );
};
