import { FETCHING_DATA, FETCHING_SUCCESS, FETCHING_FAILURE} from '../actions'

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    error:'',
  };
  
  const APIReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return{
                ...state,
                fetchingData: true
            }
        case FETCHING_SUCCESS: 
            return{
                ...state,
                fetchingData: false,
                smurfs: action.payload
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                fetchingData: false,
                error: action.payload
            }
        default:
            return state;
    }
  };
  
export default APIReducer;