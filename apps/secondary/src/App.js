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
        <h1>Second app</h1>
      </div>
      <Routes>
        <Route
          path="/second"
          element={
            <Link to={{ pathname: "/", search: "?data=second" }}>
              To Main App
            </Link>
          }
        />
      </Routes>
    </HistoryRouter>
  );
};
