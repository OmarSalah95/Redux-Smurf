import {actions} from '../actions';

const initialState ={
    newSmurf: {
        name: '',
        age: null,
        height: '',
    }
}

 const SmurfReducer = (state = initialState, action) => {
    switch (action.type) {
        // case :
        //     return 
        default:
            return state
    }
}

export default SmurfReducer