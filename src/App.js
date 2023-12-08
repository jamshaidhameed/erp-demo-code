import AppRouter from 'router';
import { ToastContainer, Slide } from 'react-toastify';
import AppLoader from 'shared/components/loaders/appLoader';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />

      <AppLoader />

      <AppRouter />
    </>
  );
}

export default App;
