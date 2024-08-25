import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import Router from "next/router";

import Style from "./loading.screen.module.scss";
import classNames from "classnames";

export const Screen = memo(() => {

	/** 로딩상태 */
	const [ loading, setLoading ] = useState(true);
	/** 로딩 HTML */
	const loaderRef = useRef<HTMLDivElement>(null);
	/** 로딩상태 처리함수 */
	const onStart = useCallback(() => setLoading(true), []);
	const onEnd = useCallback(() => setLoading(false), []);
	useEffect(() => {

		/** 페이지 로드 시 로딩 상태 초기화 - 로드 완료 상태 */
		onEnd();

		Router.events.on(`routeChangeStart`, onStart);
		Router.events.on(`routeChangeComplete`, onEnd);
		Router.events.on(`routeChangeError`, onEnd);
		return () => {
			Router.events.off(`routeChangeStart`, onStart);
			Router.events.off(`routeChangeComplete`, onEnd);
			Router.events.off(`routeChangeError`, onEnd);
		};

	}, []);

	/** 로딩이 끝나고 애니메이션이 종료된다면 display none처리 */
	const onAnimationEnd = useCallback((element:HTMLDivElement) => {
		element.style.display = `none`;
	}, []);
	useEffect(() => {

		const element = loaderRef.current;
		if(!loading && element) {
			element.addEventListener(`animationend`, () => onAnimationEnd(element));
			return () => {
				element.removeEventListener(`animationend`, () => onAnimationEnd(element));
			};
		}

	}, [loading]);

	return (
	<div ref={loaderRef} className={classNames(
		Style.loader,
		Style[`fade-out-box`]
	)}>
		<svg className={classNames(Style[`svg-loading`])}
			xmlns={`http://www.w3.org/2000/svg`} width={`206`} height={`190.41`}
			viewBox={`0 0 206 174.41`}
		>
			<g className={classNames(Style.head)}>
				<path d={`M315,205a30,30,0,0,1-60,0c0-16.57-2-30,30-30C315,175,315,188.43,315,205Z`} transform={`translate(-181 -146.59)`} fill={`#fcfcfc`}
					stroke={`#036`} strokeLinejoin={`round`} strokeWidth={`6`} />
				<path d={`M305.51,185.36S242,219.95,241.69,153.47c0,0,7.91,7.31,17.75,6.78s26.54-13.41,42.72.27S305.51,185.36,305.51,185.36Z`} transform={`translate(-181 -146.59)`}
					fill={`#ffd630`} stroke={`#036`} strokeMiterlimit={`10`} strokeWidth={`6`} />
				<path d={`M323.58,196.41a8.6,8.6,0,0,1-8.18,9l-.82-17.19A8.6,8.6,0,0,1,323.58,196.41Z`} transform={`translate(-181 -146.59)`} fill={`#fcfcfc`}
					stroke={`#036`} strokeLinejoin={`round`} strokeWidth={`4`} />
				<path d={`M246.18,203.7a8.36,8.36,0,0,0,9.06,7.59l-1.46-16.65A8.36,8.36,0,0,0,246.18,203.7Z`} transform={`translate(-181 -146.59)`} fill={`#fcfcfc`}
					stroke={`#036`} strokeLinejoin={`round`} strokeWidth={`4`} />
				<g id={`eyes`}>
					<circle cx={`90`} cy={`59.41`} r={`3`} fill={`#036`}></circle>
					<circle cx={`116`} cy={`56.41`} r={`3`} fill={`#036`}></circle>
				</g>
				<path d={`M303.56,183.68S290.92,190.49,278,191a24.05,24.05,0,0,0,7.77-17.42A23.43,23.43,0,0,0,280.61,159c6.28-1.41,13.29-1.41,20.18,4.34C314.17,174.56,303.56,183.68,303.56,183.68Z`}
					transform={`translate(-181 -146.59)`} fill={`#ebb940`} opacity={`0.7`} />
			</g>
			<g>
				<rect x={`36`} y={`160.41`} width={`136`} height={`10`} fill={`#fff`} stroke={`#036`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`4`} />
				<path d={`M331.77,265.5c0,15.19-20.8,27.5-46.46,27.5s-46.47-12.31-46.47-27.5c0-13.73,14-25.1,36.16-27.16,0,.22,3,.44,3,.66a7,7,0,0,0,14,0,5.54,5.54,0,0,0,0-.71C314.47,240.19,331.77,251.65,331.77,265.5Z`}
					transform={`translate(-181 -146.59)`} fill={`#ff3301`} stroke={`#036`} strokeMiterlimit={`10`} strokeWidth={`6`} />
				<g>
					<rect x={`44.5`} y={`107.91`} width={`119`} height={`63`} fill={`#fcfcfc`} stroke={`#036`} strokeLinejoin={`round`} strokeWidth={`6`} />
					<ellipse cx={`104`} cy={`139.41`} rx={`10.5`} ry={`7.5`} fill={`#6ff`} stroke={`#036`} strokeMiterlimit={`10`} strokeWidth={`3`} />
				</g>
				<line x1={`3`} y1={`171.41`} x2={`203`} y2={`171.41`} fill={`none`} stroke={`#036`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`6`} />
			</g>
		</svg>
	</div>
	);
});