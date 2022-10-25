import {
  Routes,
  Route,
  Link,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import Header from "./Header";

export default ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <Header />
      <Routes>
        <Route path="/main" element={<Link to="/main/second">To Secondary App</Link>} />
      </Routes>
    </HistoryRouter>
  );
};
