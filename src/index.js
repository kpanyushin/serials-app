import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Routes from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/reducers/rootReducer';
import loadSerials from './redux/actions/loadSerials';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(loadSerials());

ReactDOM.render(<BrowserRouter>
  <Provider store={store}>
    <Routes />
  </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
