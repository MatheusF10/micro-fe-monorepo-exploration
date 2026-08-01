import React from 'react';
import ReactDOM from 'react-dom/client';
import { MicroFE2App } from '../app';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(<MicroFE2App />);
}
