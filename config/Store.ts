import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import IndexReducer from 'config/Reducer/IndexReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: IndexReducer,
	middleware: (getDefaultMiddleware) => {

		let middlewares:any = getDefaultMiddleware({
			// thunk: { extraArgument: { history: customHistory } }
		}).concat(sagaMiddleware);

		// 개발모드일 때만 로그활성화
		if(process.env.NODE_ENV === `development`)
			middlewares = [ ...middlewares, logger ];
			
		return middlewares;

	},
	devTools: process.env.NODE_ENV !== 'production',
});
// 여기에 사가를 실행하거나 기타 설정을 추가할 수 있습니다.
// sagaMiddleware.run(rootSaga);

export default store;