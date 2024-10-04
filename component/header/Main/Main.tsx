import classNames from "classnames";
import React, { Suspense, useCallback, useEffect, useRef, useState } from "react";

import style from "./header.main.module.scss";
import HeaderNav from "./Nav";
import Search from "./Search";

const Main = ({ active, onOption, onActive, onClose }:any) => {

	
	const stickyRef = useRef<HTMLDivElement>(null);
	const [ isSticky, setSticky ] = useState<boolean>(false);

	/** 스크롤 이벤트 */
	const onScroll = useCallback(() => {
		const height = document.documentElement.clientHeight;
		if(stickyRef.current)
			setSticky(window.scrollY > height);
	}, []);
	useEffect(() => {

		/** 클라이언트 사이드에서만 실행되도록 확인 */
		if(typeof window !== `undefined`) {

			onScroll();
			/** 스크롤 이벤트 리스너 등록 */
			window.addEventListener(`scroll`, onScroll);
			/** 컴포넌트 언마운트 시 이벤트 리스너 제거 */
			return () => window.removeEventListener(`scroll`, onScroll);

		};

	}, []);

	return (
	<header className={classNames(style.header)}>
		<div ref={stickyRef} className={classNames(
			style[`header-wrap`],
			isSticky && style[`is-sticky`]
		)}>
			<Suspense>
			<div className={classNames(`container`, style[`header-box`], style.container)}>
				<HeaderNav active={active} isSticky={isSticky} onOption={onOption}
					onActive={onActive} onClose={onClose} />
			</div>
			{active.modal && <Search onClose={onClose} />}
			</Suspense>
		</div>
	</header>
	);

};

export default React.memo(Main);