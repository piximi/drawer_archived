import React from 'react';
import { storiesOf } from '@storybook/react';
import { DeleteCategoryDialog } from './DeleteCategoryDialog';
import {Category} from "@piximi/types";

const category: Category = {
  description: 'example',
  identifier: '11111111-1111-1111-1111-11111111111',
  index: 1,
  visualization: {
    color: '#F44336',
    visible: true
  }
};

const deleteCategory = (identifier: string) => {};

const onClose = () => {};

storiesOf('DeleteCategoryDialog', module).add('example', () => (
  <DeleteCategoryDialog category={category} deleteCategory={deleteCategory} open onClose={onClose}/>
));
