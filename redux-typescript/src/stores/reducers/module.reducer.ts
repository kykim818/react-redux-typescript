import { module } from '../actions';

// init
const initialState = {
    value : false,
}

// reducers
export default function moduleReducers(
    state = initialState,
    action : any, 
){
    switch(action.type){
        case module.INITIALIZE:
            return initialState;
        case module.SET_VALUE:
            return { }
        default:
            return state;
    }
}