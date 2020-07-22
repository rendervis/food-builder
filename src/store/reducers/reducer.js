import { combineReducers } from "redux";

import orderReducer from "./order.reducer";
import burgerBuilderReducer from "./burger-builder.reducer";
import authReducer from "../../containers/Auth/store/auth.reducer";

const reducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

export default reducer;
