import { module } from '../actions';

// init
const initialState : ModuleState = {
    appState : false,
}

// reducers
export default function moduleReducers(
    state = initialState,
    action : moduleAction, 
){
    switch(action.type){
        case module.INITIALIZE:
            return initialState;
        case module.SET_APP_STATE:
            return { }
        default:
            return state;
    }
}