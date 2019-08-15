import React from 'react';
import { Provider } from 'react-redux';
import {store} from './src/redux/store/store'
import Feedback from './src/screens/feedback/index'

export default function App() {
  return (
    <Provider store={store}>
      <Feedback/>
    </Provider>
  );
}

