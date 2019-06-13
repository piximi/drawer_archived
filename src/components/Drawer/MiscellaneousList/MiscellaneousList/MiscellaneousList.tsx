import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import {HelpListItem, SendFeedbackListItem, SettingsListItem} from '../..';

export const MiscellaneousList = (props: any) => {
  return (
    <MaterialUI.List dense>
      <SettingsListItem />

      <SendFeedbackListItem />

      <HelpListItem />
    </MaterialUI.List>
  );
};
