import { useSelector } from 'react-redux';
import Title from '../helmet';
import { Navigate } from 'react-router-dom';
import { LOGIN } from '../routes';
import AppLayout from 'shared/layout';
import { Suspense } from 'react';
import ContentLoader from 'shared/components/loaders/contentLoader';

export default function ProtectedRoute(props) {
  const { auth } = useSelector((state) => state);

  const Component = props.component;
  const { route, title, hideSidebar, hideHeaderMenu } = props;

  return (
    <>
      {auth.token ? (
        <>
          <Title title={title} />
          <AppLayout hideSidebar={hideSidebar} hideHeaderMenu={hideHeaderMenu}>
            <Suspense fallback={<ContentLoader />}>
              <Component route={route} />
            </Suspense>
          </AppLayout>
        </>
      ) : (
        <Navigate to={LOGIN} replace={true} />
      )}
    </>
  );
}
