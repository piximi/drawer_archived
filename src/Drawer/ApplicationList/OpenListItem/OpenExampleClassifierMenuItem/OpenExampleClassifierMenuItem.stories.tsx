import React from 'react';
import { storiesOf } from '@storybook/react';
import { OpenExampleClassifierMenuItem } from './OpenExampleClassifierMenuItem';

const closeMenu = () => {};

storiesOf('OpenExampleClassifierMenuItem', module).add('example', () => (
  <OpenExampleClassifierMenuItem closeMenu={closeMenu} />
));
