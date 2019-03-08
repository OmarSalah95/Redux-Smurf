import axios from 'axios';

export const ADDING_SMURF = 'FETCHING'
export const SMURF_ADDED = 'FETCHING_SUCCESS'
export const ADD_SMURF_FAILED = 'FAILURE'

export const addSmurf = newSmurf => dispatch => {
    dispatch({type:ADDING_SMURF})
    return axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => dispatch({ type: SMURF_ADDED, payload: res.data }))
        .catch(err => dispatch({ type:ADD_SMURF_FAILED, payload: err }))
};


export const DELETING = 'DELETING';
export const DELETING_SUCCESS='DELETING_SUCCESS';
export const DELETING_FAILURE = 'DELETING_FAILURE';

export const deleteSmurf = id => dispatch => {
    dispatch({type:DELETING});
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response=>{
      dispatch({type:DELETING_SUCCESS, payload:response.data})
    })
    .catch(error =>{
      dispatch({type:DELETING_FAILURE, payload:error})
    })
  }