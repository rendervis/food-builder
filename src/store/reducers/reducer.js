import { combineReducers } from "redux";

import orderReducer from "./order.reducer";
import burgerBuilderReducer from "./burger-builder.reducer";

const reducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
});

export default reducer;
