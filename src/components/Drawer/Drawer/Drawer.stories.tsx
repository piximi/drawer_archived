import React from 'react';
import { storiesOf } from '@storybook/react';
import { Drawer } from './Drawer';

const toggle = () => {};

storiesOf('Drawer', module)
  .add('example', () => (
    <Drawer toggle={toggle} toggled/>
  ));
