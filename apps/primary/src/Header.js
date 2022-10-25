import React from "react";
import { useSearchParams } from "react-router-dom";

export default () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  return (
    <div>
      <h1>Main Application</h1>
      <p>{urlSearchParams.toString()}</p>
    </div>
  );
};
