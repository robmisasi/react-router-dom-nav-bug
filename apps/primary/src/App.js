import {
  Routes,
  Route,
  Link,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

export default ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <div>
        <h1>Main Application</h1>
      </div>
      <Routes>
        <Route
          path="/main"
          element={
            <Link to={{ pathname: "/second", search: "?data=main" }}>
              To Secondary App
            </Link>
          }
        />
      </Routes>
    </HistoryRouter>
  );
};
