'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "../Redux/store"; // Adjust the path based on your structure
import Spinner from './components/Spinner';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner/>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
