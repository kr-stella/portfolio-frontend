import React, { useEffect } from "react";
// import { Provider } from "react-redux";
// import { AuthProvider } from "../config/context/AuthProvider";

import Router from 'next/router';
import { AppProps } from 'next/app';



// import store from "../config/Store";  // 상태관리를 위한 Redux 스토어 import

import "../style/test.scss";
// import { useRouter } from "next/router";
// import { axiosMain } from "config/Axios";
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css'; // 스타일시트도 함께 임포트해야 합니다.
const App = ({ Component, pageProps }:AppProps) => {
	// const router = useRouter();

	// useEffect(() => {
	//   const checkAuth = async () => {
	// 	NProgress.start();
	// 	try {
	// 	  const response = await axiosMain.get(`/profile`);
	// 	  if (!response.data) {
	// 		router.push('/login');
	// 	  }
	// 	} catch (error) {
	// 	  router.push('/login');
	// 	} finally {
	// 	//   NProgress.done();
	// 	}
	//   };
  
	//   checkAuth();
	// }, [router]);
	// useEffect(() => {
	// 	console.log("app쪽이 먼저냐")
	// 	const handleRouteChange = (url: string) => {
	// 	  // 사용자 인증 상태 확인 로직 (여기서는 가정)
	// 	  const isLoggedIn = document.cookie.includes("token=valid");  // 쿠키에서 인증 토큰 유무 확인
	
	// 	  // 로그인되지 않은 상태에서 보호된 페이지에 접근 시 로그인 페이지로 리디렉션
	// 	  if (!isLoggedIn && url !== '/login') {
	// 		Router.push('/login');
	// 	  }
	// 	};
	
	// 	Router.events.on('routeChangeStart', handleRouteChange);
	// 	return () => {
	// 	  Router.events.off('routeChangeStart', handleRouteChange);
	// 	};
	//   }, []);



	
	// <Provider store={store}>
		
	// </Provider>
	return (<Component {...pageProps} />
	);

};

export default React.memo(App);




// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import App from 'next/app';
// import { axiosMain } from 'config/Axios';

// class MyApp extends App {
//   static async getInitialProps(appContext) {
//     const appProps = await App.getInitialProps(appContext);
//     const { ctx } = appContext;

//     // if (ctx.req) { // 서버 사이드에서만 실행
//     //   try {
//     //     const { cookie } = ctx.req.headers;
//     //     const response = await axiosMain.get(`/profile`);

//     //     if (!response.data) {
//     //       ctx.res.writeHead(302, { Location: '/login' });
//     //       ctx.res.end();
//     //     }
//     //   } catch (error) {
//     //     ctx.res.writeHead(302, { Location: '/login' });
//     //     ctx.res.end();
//     //   }
//     // }

//     return { ...appProps };
//   }

//   render() {
//     const { Component, pageProps } = this.props;
//     return <Component {...pageProps} />;
//   }
// }

// export default MyApp;