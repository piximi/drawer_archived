import React from 'react';
import { storiesOf } from '@storybook/react';
import { AppBar } from './AppBar';

const toggle = () => {};

storiesOf('AppBar', module).add('example', () => (
  <AppBar toggle={toggle} toggled />
));
