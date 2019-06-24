import React from 'react';
import { storiesOf } from '@storybook/react';
import { DrawerAppBar } from './DrawerAppBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const toggle = () => {};

storiesOf('DrawerAppBar', module).add('example', () => (
  <ThemeProvider theme={theme}>
    <DrawerAppBar toggle={toggle} toggled />
  </ThemeProvider>
));
