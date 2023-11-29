import { FC } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Layout } from '../pages/Layout';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';
import { RateEditing } from '../pages/RateEditing';
import { RateSearch } from '../pages/RateSearch';
import { RateChange } from '../pages/RateChange';

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":rateId" element={<RateEditing />} />
          <Route path="/rate-change">
            <Route index element={<RateChange />} />
            <Route path=":rateId" element={<RateEditing />} />
          </Route>
          <Route path="/rate-search">
            <Route index element={<RateSearch />} />
            <Route path=":rateId" element={<RateEditing />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
