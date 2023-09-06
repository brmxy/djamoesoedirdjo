import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.tsx';

// eslint-disable-next-line import/no-unresolved
import 'unfonts.css';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
