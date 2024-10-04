import axios from "axios";
import classNames from "classnames";
import React, { useCallback } from "react";

import style from "./header.aside.box.logout.module.scss";

const Logout = () => {

	/**
	 * 로그아웃 - POST로 오쳥하기 위해서 클릭이벤트 생성
	 * ( GET 요청 시 )최신 브라우저는 사용자의 편의성을 높이기 위해
	 * 입력한 주소나 검색어를 자동으로 완성하려고 시도하며,
	 * 이 과정에서 실제로 웹 서버에 요청을 보냄.
	 * 즉 접근하지 않아도 로그아웃 됨.
	*/
	const onLogout = useCallback(() => {
		axios.post(`/logout`, {}, {
			headers: {
				"Content-Type": `application/x-www-form-urlencoded`
			}
		})
		.then(res => {
			const { redirect } = res.data;
			if(res.status === 200)
				window.location.href = redirect;
		})
		.catch(err => {
			console.log(err);
			alert(`Logout Fail`);
		});
	}, []);

	return (
	<li>
		<div className={classNames(style.power)} onClick={onLogout}>
			<i className={`fas fa-power-off`} />
			<p className={`color-r`}>{`로그아웃`}</p>
		</div>
	</li>
	);

};

export default React.memo(Logout);