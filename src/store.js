import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { default as Reducer } from './reducers';

const store = createStore(Reducer, composeWithDevTools());

export default store;
