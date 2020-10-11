import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2138066Reducer from '../features/SignIn2138066/redux/reducers'
import SignIn2138052Reducer from '../features/SignIn2138052/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2138066: SignIn2138066Reducer,
SignIn2138052: SignIn2138052Reducer,

});