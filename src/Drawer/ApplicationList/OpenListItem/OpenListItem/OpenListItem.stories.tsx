import React from 'react';
import { storiesOf } from '@storybook/react';
import { OpenListItem } from './OpenListItem';

const toggle = () => {};

storiesOf('OpenListItem', module).add('example', () => <OpenListItem />);
