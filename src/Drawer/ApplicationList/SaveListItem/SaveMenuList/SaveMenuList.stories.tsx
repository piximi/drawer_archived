import React from 'react';
import { storiesOf } from '@storybook/react';
import { SaveMenuList } from './SaveMenuList';

const anchorEl = null;

const onClose = () => {};

storiesOf('AppBar', module).add('example', () => (
  <SaveMenuList anchorEl={anchorEl} onClose={onClose} open />
));
