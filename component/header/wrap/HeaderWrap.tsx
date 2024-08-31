import React, { memo, ReactNode, useCallback, useEffect, useRef } from "react";

import { Active } from "..";
import { HeaderNav } from "./nav";

import style from "./header.wrap.module.scss";
import classNames from "classnames";

interface Define {active:Active; onActive:(v:keyof Active) => void; onClose:() => void; onOption:() => void;};
export const HeaderWrap = memo(({ active, onActive, onClose, onOption }:Define) => {

	const stickyRef = useRef<HTMLDivElement>(null);
	/** 스크롤 이벤트 */
	const onScroll = useCallback(() => {
		const height = document.documentElement.clientHeight;
		if(stickyRef.current)
			stickyRef.current.classList.toggle(style[`is-sticky`], window.scrollY > height);
	}, []);

	useEffect(() => {

		/** 클라이언트 사이드에서만 실행되도록 확인 */
		if(typeof window !== `undefined`) {

			/** 스크롤 이벤트 리스너 등록 */
			window.addEventListener(`scroll`, onScroll);
			/** 컴포넌트 언마운트 시 이벤트 리스너 제거 */
			return () => window.removeEventListener(`scroll`, onScroll);

		};

	}, []);

	return (
	<div ref={stickyRef} className={classNames(style[`header-wrap`])}>
		<div className={classNames(`container`, style[`header-box`], style.container)}>
			<HeaderNav active={active} onActive={onActive} onClose={onClose} onOption={onOption} />
		</div>
	</div>
	);

});