import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = createStore(rootReducer, ['Use Redux'])

// export default store;

// const store = new Store(reducers, initialState);

// const configureStore = preloadedState => createStore(
//   rootReducer,
//   preloadedState,
//   applyMiddleware(thunk, api)
// )

export default store;

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
