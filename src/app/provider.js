'use client'; // Marks this file as a Client Component

import { Provider } from 'react-redux';
import store from "../Redux/store"; // Adjust the path based on your folder structure

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
