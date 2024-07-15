import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Favoritos from './routes/Favoritos';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Suspense fallback="Loading...">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/categorias" element={<p>Oi categorias</p>} />
          <Route path="/minha-estante" element={<p>Oi Minha estante</p>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </>
);
