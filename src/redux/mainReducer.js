import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2182318Reducer from '../features/SignIn2182318/redux/reducers'
import SignIn2138082Reducer from '../features/SignIn2138082/redux/reducers'
import SignIn2138066Reducer from '../features/SignIn2138066/redux/reducers'
import SignIn2138052Reducer from '../features/SignIn2138052/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2182318: SignIn2182318Reducer,
SignIn2138082: SignIn2138082Reducer,
SignIn2138066: SignIn2138066Reducer,
SignIn2138052: SignIn2138052Reducer,

});