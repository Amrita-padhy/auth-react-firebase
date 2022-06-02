import React from 'react';
import AppRouter from './AppRouter';
import AuthContextProvider from './context/auth-context';
function App() {
  return (
    <AuthContextProvider>
      <AppRouter/>
    </AuthContextProvider>
  );
}

export default App;
