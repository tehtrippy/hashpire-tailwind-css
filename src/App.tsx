import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Garden, Components } from './components/pages';

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/garden' element={<Garden />} />
        <Route path='/components' element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
