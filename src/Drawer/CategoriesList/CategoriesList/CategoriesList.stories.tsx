import React from 'react';
import { storiesOf } from '@storybook/react';
import { CategoriesList } from './CategoriesList';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

storiesOf('CategoriesList', module).add('example', () => (
  <Provider store={store}>
    <CategoriesList categories={[]} />
  </Provider>
));
