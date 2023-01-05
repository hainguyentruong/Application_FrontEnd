import React from 'react';
import Confirmed from './page/Confirmed';
import Deaths from './page/Deaths';
import Recovered from './page/Recovered';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Confirmed />}/>
      </Routes>
      <Routes>
        <Route path="/deaths" element={<Deaths />}/>
      </Routes>
      <Routes>
        <Route path="/recovered" element={<Recovered />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
