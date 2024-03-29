import { createStore } from 'redux';

import reducer from './reducers/habitsReducer';

let store;

export function configureStore() {
  store = createStore(reducer);
  return store;
}
