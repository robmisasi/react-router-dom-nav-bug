import React, { lazy, Suspense } from "react";
import {
  Route,
  Routes,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";

const PrimaryLazy = lazy(() => import("./PrimaryApp"));
const SecondaryLazy = lazy(() => import("./SecondaryApp"));

const history = createBrowserHistory();

export default () => {
  return (
    <HistoryRouter history={history}>
      <h1>Acme Software</h1>
      <Suspense>
        <Routes>
          <Route path="/main" element={<PrimaryLazy history={history} />} />
          <Route path="/main/*" element={<SecondaryLazy history={history} />} />
          <Route path="/" element={<Navigate to="/main" />} />
        </Routes>
      </Suspense>
    </HistoryRouter>
  );
};
