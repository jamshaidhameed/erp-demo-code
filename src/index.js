import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persister } from './store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ErrorBoundary } from 'react-error-boundary';
import App from './App';

// styles
import 'assets/css/variables.css';
import 'assets/css/main.css';
import 'assets/css/layout.css';
import 'assets/css/form.css';
import 'assets/css/responsive.css';
import './views/Financial/financial.css';
import './views/Payroll/payroll.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import '@fortawesome/fontawesome-free/css/all.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false },
  },
});

root.render(
  // <ErrorBoundary>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </PersistGate>
  </Provider>
  // </ErrorBoundary>
);
