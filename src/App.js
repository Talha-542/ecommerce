
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="app-container">
      {isAuthenticated ? (
        <h1>Welcome!</h1>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
