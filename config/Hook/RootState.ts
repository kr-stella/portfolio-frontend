import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "config/Reducer/IndexReducer";

/**
 * 매번 useSelector 쓸때 RootStateOrAny, any 설정하기 귀찮아서 만든 커스텀 훅
 * 버전 변경으로 RootStateOrAny도 에러남
*/
export const rootSelector:TypedUseSelectorHook<RootState> = useSelector;