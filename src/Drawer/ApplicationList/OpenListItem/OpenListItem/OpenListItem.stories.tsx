import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApplicationList } from './ApplicationList';

const toggle = () => {};

storiesOf('AppBar', module).add('example', () => <ApplicationList />);
