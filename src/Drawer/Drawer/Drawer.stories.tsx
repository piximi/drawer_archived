import React from 'react';
import { storiesOf } from '@storybook/react';
import { Drawer } from './Drawer';
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const toggle = () => {};

storiesOf('Drawer', module)
  .add('example', () => (
    <ThemeProvider theme={theme}>
      <Drawer toggle={toggle} toggled/>
    </ThemeProvider>
  ));
