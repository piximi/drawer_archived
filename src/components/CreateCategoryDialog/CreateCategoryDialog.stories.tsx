import React from 'react';

import { storiesOf } from '@storybook/react';

import { CreateCategoryDialog } from '..';

const createCategory = (color: string, description: string) => {};

const onClose = () => {};

storiesOf('CreateCategoryDialog', module).add('example', () => (
  <CreateCategoryDialog createCategory={createCategory} open={true} onClose={onClose}/>
));
