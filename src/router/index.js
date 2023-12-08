import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import menuKeys from './menuKeys';

import NoPageFound from 'views/Shared/Landing/noPageFound';

// auth
import authRoutes from './auth';
import AuthRoute from './auth/route';

// protected
import protectedRoutes from './protected';
import ProtectedRoute from './protected/route';

// private
import privateRoutes from './private';
import PrivateRoute from './private/route';

const RoutesJSX = (
  <>
    {/* Auth routes */}
    {authRoutes.map((item) => (
      <Route
        key={item.path}
        path={item.path}
        loader={() => item.key}
        exact
        element={<AuthRoute title={item.title} component={item.component} route={item.path} />}
      />
    ))}

    {/* Protected routes */}
    {protectedRoutes.map((item) => (
      <Route
        key={item.path}
        path={item.path}
        exact
        element={
          <ProtectedRoute
            title={item.title}
            component={item.component}
            route={item.path}
            hideSidebar={item.hideSidebar}
            hideHeaderMenu={item.hideHeaderMenu ?? false}
          />
        }
        loader={() => ({
          routeKey: item.key,
          menuKey: menuKeys.default,
        })}
      />
    ))}

    {/* Private routes */}
    {privateRoutes.map((item) =>
      item.routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          loader={() => ({
            routeKey: route.key,
            menuKey: item.key,
          })}
          element={
            <PrivateRoute title={route.title} component={route.component} route={route.path} />
          }
        />
      ))
    )}

    {/* No page found */}
    <Route
      path="*"
      element={<AuthRoute title="No Page Found" component={NoPageFound} route="*" />}
    />
  </>
);

const routes = createRoutesFromElements(RoutesJSX);
const router = createBrowserRouter(routes);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
