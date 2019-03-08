import { FETCHING_DATA, FETCHING_SUCCESS, FETCHING_FAILURE} from '../actions/APIActions'
import {ADDING_SMURF, SMURF_ADDED, ADD_SMURF_FAILED} from '../actions/SmurfActions';

const initialState ={
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    error:''
}




  const rootReducer = (state = initialState, action) => {
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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<API>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        case ADDING_SMURF :
            return{
                ...state,
                addingSmurf: true
            }
        case SMURF_ADDED:
            return {
                ...state,
                addingSmurf:false,
                smurfs:action.payload
            }
        case ADD_SMURF_FAILED :
            return  {
                ...state,
                addingSmurf:false,
                error: action.payload
            }
        default:
            return state;
    }
  };
  
export default rootReducer;




/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
