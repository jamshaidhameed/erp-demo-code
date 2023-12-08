import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Title({ title }) {
  const defaultTitle = 'ERP';
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title ? `${title} | ERP` : defaultTitle}</title>
      </Helmet>
    </HelmetProvider>
  );
}
