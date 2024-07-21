import { combineReducers } from "redux";

import Default from "./DefaultReducer";
const IndexReducer = combineReducers({
	Default
});

export default IndexReducer;
export type RootState = ReturnType<typeof IndexReducer>;