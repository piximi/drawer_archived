import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedCategoriesList } from './ConnectedCategoriesList';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

storiesOf('CategoriesList', module).add('example', () => (
  <Provider store={store}>
    <ConnectedCategoriesList />
  </Provider>
));
