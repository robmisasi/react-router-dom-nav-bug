import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <p>This is a route</p>
      <Link to={{ pathname: "/", search: "?data=data" }}>Back to main app</Link>
    </div>
  );
};
