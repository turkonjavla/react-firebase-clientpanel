import { createStore, compose, applyMiddleware } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './firebaseConfig';
import { initialState, rootReducer } from './reducers';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

const enchancers = [
  applyMiddleware(thunk.withExtraArgument({
    getFirestore,
    getFirebase
  })),
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, rrfConfig),
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
];

const composeEnchancers = compose(...enchancers);

const store = createStore(rootReducer, initialState, composeEnchancers);

export default store;