import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import { Navigation } from './components/Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>

      {/* <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#f9e3cc',
            color: '#f57a38',
            marginTop: '25px',
          },
        }}
      /> */}
    </>
  );
};
