import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedCategoriesList } from './ConnectedCategoriesList';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

storiesOf('CategoriesList', module).add('example', () => (
  <Provider store={store}>
    <DragDropContextProvider backend={HTML5Backend}>
      <ConnectedCategoriesList />
    </DragDropContextProvider>
  </Provider>
));
