import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const quaryClient = new QueryClient()

root.render(
  <QueryClientProvider client={quaryClient}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </QueryClientProvider>
);
