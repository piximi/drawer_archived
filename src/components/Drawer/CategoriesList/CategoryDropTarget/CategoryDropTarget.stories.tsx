import { storiesOf } from '@storybook/react';
import React from 'react';
import {CategoryDropTarget} from "./CategoryDropTarget";
import {CategoryListItem} from "../CategoryListItem/CategoryListItem";

const category = {
  description: 'example',
  identifier: '11111111-1111-1111-1111-11111111111',
  index: 1,
  visible: true,
  visualization: {
    color: '#F44336',
    visible: true
  }
};

const updateImageCategory = () => {};

storiesOf('CategoryDropTarget', module).add('example', () => (
  <CategoryDropTarget category={category} updateImageCategory={updateImageCategory}>
    <CategoryListItem/>
  </CategoryDropTarget>
));
