import React from 'react';
import { storiesOf } from '@storybook/react';
import { SaveClassifierMenuItem } from './SaveClassifierMenuItem';

const toggle = () => {};

storiesOf('SaveClassifierMenuItem', module).add('example', () => (
  <SaveClassifierMenuItem />
));
