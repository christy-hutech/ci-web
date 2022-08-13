import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import Articles from './pages/articles/Articles';

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
// import { BrowserRouter } from "react-router-dom";
import reducer from './reducer/reducer';
import appRootSaga from './saga/saga';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { data: reducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(appRootSaga);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <Articles/> */}
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
