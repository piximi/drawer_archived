import React from 'react';
import { storiesOf } from '@storybook/react';
import { CategoriesList } from './CategoriesList';

storiesOf('CategoriesList', module).add('example', () => (
  <CategoriesList categories={[]} />
));
