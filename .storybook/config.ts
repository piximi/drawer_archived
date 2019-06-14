import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function stories() {
  req.keys().forEach(req);
}

configure(stories, module);
