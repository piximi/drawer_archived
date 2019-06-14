import React from 'react';
import { storiesOf } from '@storybook/react';
import { NewClassifierListItem } from './NewClassifierListItem';

const toggle = () => {};

storiesOf('NewClassifierListItem', module).add('example', () => (
  <NewClassifierListItem />
));
