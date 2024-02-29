import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App.tsx';

import './assets/scss/styles.scss';
import { CountryDetails } from './pages/CountryDetails.tsx';
import { CountryList } from './pages/CountryList.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App children={<CountryList />} />,
  },
  {
    path: "/:countryNameParam",
    element: <App children={<CountryDetails />} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
			<RouterProvider router={router} />
	</React.StrictMode>
);
