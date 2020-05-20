import { GET_VARIABLE_TEMPLATE } from '../actions/types';

const initialState = {
  state_var: []
};

export default function(state = initialState, action) {
  //
  switch (action.type) {
    case GET_VARIABLE_TEMPLATE:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}
