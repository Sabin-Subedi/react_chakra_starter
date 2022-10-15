const { Route, Routes } = require("react-router-dom");

const renderRoutes = function (routes) {
  if (!Array.isArray(routes)) {
    throw new Error("The routes should be an array");
  }

  return (
    <Routes>
      {routes.map(
        ({ accessible, component, path, props, ...rest }) =>
          accessible && (
            <Route
              key={path}
              {...rest}
              path={path}
              caseSensitive
              component={component && <component {...props} />}
            ></Route>
          )
      )}
    </Routes>
  );
};
