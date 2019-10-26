import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR } from "./smurfs";

const initialState = {
  isLoading: false,
  errors: null,
  smurf: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return { ...state, 
         isLoading: true, 
         errors: null,
         smurf:[] 
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        smurf: action.payload
      };
   case FETCH_SMURFS_ERROR:
   return{
      ...state, 
      isLoading:false,
      error: action.payload,
      smurf: []
   }

    default:
      return state;
  }
};
