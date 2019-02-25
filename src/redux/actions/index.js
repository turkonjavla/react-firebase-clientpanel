import { 
  ADD_CLIENT, 
  ADD_CLIENT_ERROR 
} from './actionTypes';

export const addClient = (client) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('clients')
      .add({
        ...client
      })
      .then(() => {
        dispatch({
          type: ADD_CLIENT,
          client
        })
      })
      .catch(err => {
        dispatch({
          type: ADD_CLIENT_ERROR,
          err
        })
      })
  }
}