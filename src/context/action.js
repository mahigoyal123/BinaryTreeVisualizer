import TYPES from "./types";

const action = (state, action) => {
  switch(action.type)
  {
    case TYPES.SET_ARRAY:
        return {...state, inputArray: action.payload};
    default:
        return state;    
  }
}

export default action;