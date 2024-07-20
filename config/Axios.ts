import axios from "axios";

const API_HOST = process.env.API_HOST;
const MAIN_HOST = process.env.MAIN_HOST;
const LOGOUT_HOST = process.env.LOGOUT_HOST;

const HEADERS = {
	"Accept": "application/json",
	"X-Requested-With": "XMLHttpRequest",
	"Content-Type": "application/json;charset=UTF-8"
};
const INIT = {
	baseURL: MAIN_HOST, timeout: 180000,
	withCredentials: true,
	headers: {
		get: { "Accept": "application/json", "X-Requested-With": "XMLHttpRequest" },
		post: HEADERS, put: HEADERS, patch: HEADERS, delete: HEADERS
	}
};

const INIT_API = {
	baseURL: API_HOST, timeout: 180000,
	withCredentials: true,
	headers: {
		get: { "Accept": "application/json", "X-Requested-With": "XMLHttpRequest" },
		post: HEADERS, put: HEADERS, patch: HEADERS, delete: HEADERS
	}
};

// XSRF-TOKEN 가져오기
const getXSRF = () => {
	const matches = document.cookie.match(/(^|;)\s*XSRF-TOKEN\s*=\s*([^;]+)/);
	return matches? decodeURIComponent(matches[2]):``;
};

// ISO-8859-1 문자 집합 검사
// XSRF-TOKEN의 쿠키를 임의로 한글로 변경하는 경우 예외처리를 하기 위해서 작성
const isIso = (v:string) => !/[^\u0000-\u00FF]/.test(v);

// 요청 인터셉터
const reqInterceptor = (config:any) => {
	
	// const token = getXSRF();
	// if(token && isIso(token)) config.headers[`X-XSRF-TOKEN`] = token;
	// else {
	// 	window.location.href = `/logout`;
	// 	return Promise.reject(new Error(`X-XSRF-TOKEN`));
	// }

	return config;

}
// 응답 인터셉터 추가
const resInterceptor = (err:any) => {
	
	if(LOGOUT_HOST && err.response && (err.response.status === 401)) {
		// window.location.href = `http://localhost:8084`;
		try {
			// POST 방식으로 로그아웃 요청
			// axios.post('http://localhost:8084/logout');
			// axios.post(LOGOUT_HOST, {}, {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded"
			// 	}
			// })
			axios.post(LOGOUT_HOST)
			.then(res => {
				const { redirect } = res.data;
				if(res.status === 200)
					window.location.href = redirect;
			})
			.catch(err => {
				console.log(err);
				alert(`Logout Fail`);
			});
			// 로그아웃 후 페이지 리디렉션
			// window.location.href = 'http://localhost:8081';
		} catch (logoutError) {
			console.error('Logout failed:', logoutError);
		}
	}
	// console.log(`err.response.status ===> ${err.response.status}`, err.response)
	// if(err.response && (err.response.status === 401))
	// 	window.location.href = `http://localhost:8081/logout`;

	return Promise.reject(err);

};

const axiosApi = axios.create({
	...INIT_API,
	transformRequest: [(response) => JSON.stringify(response)],
});
const axiosMain = axios.create({
	...INIT,
	transformRequest: [(response) => JSON.stringify(response)],
});
const axiosFormData = axios.create({
	...INIT,
	headers: { ...INIT.headers, "Content-Type": "multipart/form-data" },
});

// 인터셉터 추가
axiosApi.interceptors.request.use(reqInterceptor);
axiosMain.interceptors.request.use(reqInterceptor);
axiosFormData.interceptors.request.use(reqInterceptor);

axiosApi.interceptors.response.use(response => response, resInterceptor);
axiosMain.interceptors.response.use(response => response, resInterceptor);
axiosFormData.interceptors.response.use(response => response, resInterceptor);

export { axiosApi, axiosMain, axiosFormData };