import React, { useRef, useEffect } from "react";

import { mount } from "secondary/SecondaryApp";

export default ({ history }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return () => {};
    }

    if (ref.current.shadowRoot) {
      return () => {};
    }
    const { onParentNavigate, unmount } = mount(ref.current, {
      onNavigate: (update) => {
        if (history.location.pathname !== update.location.pathname) {
          history.push(update.location.pathname);
        }
      },
      initialPath: history.location.pathname,
    });

    const unlisten = history.listen(onParentNavigate);
    return () => {
      unlisten();
      unmount();
    };
  }, []);

  return <div ref={ref} />;
};
