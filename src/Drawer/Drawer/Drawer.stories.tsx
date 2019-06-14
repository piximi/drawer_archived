import React from 'react';
import { storiesOf } from '@storybook/react';
import { Drawer } from './Drawer';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const toggle = () => {};

storiesOf('Drawer', module).add('example', () => (
  <DragDropContextProvider backend={HTML5Backend}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Drawer toggle={toggle} toggled />
      </ThemeProvider>
    </Provider>
  </DragDropContextProvider>
));
