import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@material-ui/core'
import { Router } from './components/Router'
import { AppBar } from './components/AppBar'

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <AppBar />
        <Router />
      </BrowserRouter>
    </Box>
  );
}

export default App;
