import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Reducer
import toggleButtonSlice from "./ToggleButton";

const reducers = combineReducers({
  toggleButton: toggleButtonSlice,
});

export default configureStore({
  reducer: reducers,
});
