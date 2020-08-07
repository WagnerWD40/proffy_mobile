import React from 'react';
import { StatusBar } from 'react-native';

import AppStack from './routes/AppStack';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#8257E5" />
      <AppStack />
    </>
  );
}

export default App;