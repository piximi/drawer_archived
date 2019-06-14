import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedCategoryListItem } from './ConnectedCategoryListItem';
import { Category } from '@piximi/types';

const category: Category = {
  description: 'example',
  identifier: '11111111-1111-1111-1111-11111111111',
  index: 1,
  visualization: {
    color: '#F44336',
    visible: true
  }
};

storiesOf('CategoryListItem', module).add('example', () => (
  <ConnectedCategoryListItem category={category} isOver={true} />
));
