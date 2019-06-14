import React from 'react';
import { storiesOf } from '@storybook/react';
import { OpenExampleClassifierMenuItem } from '../OpenExampleClassifierMenuItem';

const closeMenu = () => {};

storiesOf('OpenClassifierMenuItem', module).add('example', () => (
  <OpenExampleClassifierMenuItem closeMenu={closeMenu} />
));
