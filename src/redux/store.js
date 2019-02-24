import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';

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
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, rrfConfig),
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
];

const composeEnchancers = compose(...enchancers);

const store = createStore(rootReducer, initialState, composeEnchancers);

export default store;