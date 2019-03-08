import { FETCHING_DATA, FETCHING_SUCCESS, FETCHING_FAILURE} from '../actions/APIActions'

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    error:'',
  };
  
  const APIReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
        console.log('Fired action,');
            return{
                ...state,
                fetchingSmurfs: true
            }
        case FETCHING_SUCCESS: 
            return{
                ...state,
                fetchingSmurfs: false,
                smurfs: action.payload
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            }
        default:
            return state;
    }
  };
  
export default APIReducer;