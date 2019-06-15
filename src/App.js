import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CourseLists from './components/CourseLists';

function App() {
  return (
    <Provider store={store}>
      <CourseLists />
    </Provider>
  );
}

export default App;
