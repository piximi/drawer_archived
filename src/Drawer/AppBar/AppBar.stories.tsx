import React from 'react';
import { storiesOf } from '@storybook/react';
import { AppBar } from './AppBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const toggle = () => {};

storiesOf('AppBar', module).add('example', () => (
  <ThemeProvider theme={theme}>
    <AppBar toggle={toggle} toggled />
  </ThemeProvider>
));
