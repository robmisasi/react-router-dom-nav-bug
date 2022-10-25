import {
  Routes,
  Route,
  Link,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import Content from "./Content";

export default ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <div>
        <h2>This is the second app</h2>
      </div>
      <Routes>
        <Route path="/main/second/third" element={<Content />} />
        <Route
          path="/main/second/*"
          element={<Navigate to="/main/second/third" />}
        />
      </Routes>
    </HistoryRouter>
  );
};
