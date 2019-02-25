import { 
  ADD_CLIENT, 
  ADD_CLIENT_ERROR 
} from '../actions/actionTypes';

const initialState = {};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      console.log('Client added: ', action.client);
      return state;
    
    case ADD_CLIENT_ERROR:
      console.log('Error adding clinet: ', action.err)
      return state;

    default:
      return state;
  }
}

export default clientReducer;