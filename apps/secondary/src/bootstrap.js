import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  let unlisten;
  if (onNavigate) {
    unlisten = history.listen(onNavigate);
  }
  const root = createRoot(el);

  root.render(<App history={history} />);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
    unmount() {
      if (unlisten) {
        unlisten();
      }
      root.unmount();
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_second-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
export { mount };
