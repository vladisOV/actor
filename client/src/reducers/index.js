import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  login: loginReducer,
  form: formReducer
});
