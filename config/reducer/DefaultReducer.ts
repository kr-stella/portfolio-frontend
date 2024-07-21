import { createSlice, createAction } from "@reduxjs/toolkit";

const INIT = {
	count:0
};
interface CreateStr {prefix:string; str:string;};
const createStr = ({ prefix, str }:CreateStr) =>
	createAction(`${prefix}/${str}`);
export type ExtraActions<T extends readonly string[]> = {
	[K in T[number]]:ReturnType<typeof createAction>;
};
const createActions = <T extends readonly string[]>(prefix:string, types:T): ExtraActions<T> => {
	return types.reduce((actions, str) => {
		actions[str as T[number]] = createStr({ prefix, str });
		return actions;
	}, {} as ExtraActions<T>);
};
// ACTION 만드는 부분
const prefix:string = `DEFAULT`;
const extraStr = [
	`setDataToKey`, `setDataToKeyId`,
	`getProfile`, `getOptions`
] as const;
const actions = createActions(prefix, extraStr);
const action = createSlice({
	name: prefix,				// Slice ( DEFAULT/${name} )
	initialState: INIT,			// 초기값
	reducers: {
		calc: (state, a) => { return { ...state, 
			count: a.payload
			// count: state.count + a.payload 
		}; },
		
	},
	// 비동기적인 작업을 처리하고 난 후 상태를 업데이트할 때 사용
	extraReducers:(builder) => {}
});

export default action.reducer;
export const Default = {
	...action.actions, ...actions
};