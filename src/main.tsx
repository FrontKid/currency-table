import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './router/AppRoutes.tsx';
import { RateContext } from './store/RateContext.tsx';

import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RateContext>
      <AppRoutes />
    </RateContext>
  </React.StrictMode>,
);
