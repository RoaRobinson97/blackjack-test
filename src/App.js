import React from 'react';
import {
  BrowserRouter, Route, Link, Routes,
} from 'react-router-dom';
import Page1 from './pages/Page1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<h1>Home Page</h1>} />
        <Route exact path="page1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
