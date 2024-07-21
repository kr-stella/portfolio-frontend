import React from "react";
import { axiosMain } from "../config/Axios";
// import Counter from "@component/Counter";

import { GetServerSideProps } from 'next';
// import Calendar from "@common/calendar/Calendar";
import axios from "axios";
// export const getServerSideProps:GetServerSideProps = async(context) => {

// 	const { req } = context;
// 	const token = req.cookies?.[`CAPT-AUTH`];
// 	const response = await axios.get('http://localhost:8080/profile', {
// 		withCredentials: true,
// 		headers: {
// 			Authorization: `Bearer ${token}`  // 토큰을 Authorization 헤더에 추가
// 		}
// 	});
// 	// console.log(req);
// 	// console.log(req.cookies);
// 	// console.log(token);
	
// 	// const response = await axiosMain.get(`/profile`);
// 	// console.log(response.data);
// 	// const response = await fetch('http://localhost:8084/api/profile');
// 	// console.log(response.payload);
// 	console.log(response);
// 	// 토큰 유효성 검사 로직
// 	const tokenIsValid = token === "valid";  // 임시로 토큰의 유효성 검증

// 	if(!token) {
// 	return {
// 			redirect: {
// 			destination: '/login2',
// 			permanent: false,
// 			},
// 		};
// 	}

// 	/** props를 페이지에 전달 */
// 	return { props:{} };

// };

const Home = () => {

	return (
	<main>
		<h1>Next.js / 테스트로직 - Alias + Security</h1>
		{/* <Counter /> */}
	</main>
	);

};

export default React.memo(Home);