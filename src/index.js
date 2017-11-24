import React from 'react';
import ReactDOM from 'react-dom';

import{createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import {fetchMemes} from './actions';




const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log('Store::' , store.getState());
})
store.dispatch(fetchMemes())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')

)
