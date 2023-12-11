import React from 'react';
import { StyleProvider } from '@ant-design/cssinjs';

import { createRoot } from 'react-dom/client';
import App from './App';
import Hello from './hello'
import { BrowserRouter, HashRouter, Outlet, Route, Routes, createHashRouter } from 'react-router-dom';

const root = document.getElementById('root');

if (root) {
    createRoot(root).render(<StyleProvider hashPriority="high">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Outlet/>}>
          <Route index element={<App/>}/>
          <Route path='test' element={<Hello/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </StyleProvider>);
}