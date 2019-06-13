import React from 'react';
import { useDrawer } from '@piximi/hooks';
import { Drawer } from './components';

const App: React.FC = () => {
  const { openedDrawer, toggleDrawer } = useDrawer();

  return <Drawer toggle={toggleDrawer} toggled={openedDrawer} />;
};

export default App;
