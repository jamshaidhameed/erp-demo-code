import { useSelector } from 'react-redux';
import Title from '../helmet';
import { Navigate } from 'react-router-dom';
import { LOGIN, HOME } from '../routes';
import AppLayout from 'shared/layout';
import { Suspense } from 'react';
import ContentLoader from 'shared/components/loaders/contentLoader';

export default function PrivateRoute(props) {
  const { auth } = useSelector((state) => state);

  const hasPermission = true;
  const Component = props.component;
  const route = props.route;

  return (
    <>
      {auth.token ? (
        <>
          {hasPermission ? (
            <>
              <Title title={props.title} />
              <AppLayout>
                <Suspense fallback={<ContentLoader />}>
                  <Component route={route} />
                </Suspense>
              </AppLayout>
            </>
          ) : (
            <Navigate to={HOME} replace={true} />
          )}
        </>
      ) : (
        <Navigate to={LOGIN} replace={true} />
      )}
    </>
  );
}
