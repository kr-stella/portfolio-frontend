import classNames from "classnames";
import { Confetti } from "component/icon";
import React, { memo } from "react";

import style from "./main.summary.welcome.module.scss";

export const Welcome = memo(() => (
	<div className={classNames(style[`welcome-wrap`])}>
		<div className={`welcome`} data-aos={`fade-down`} data-aos-delay={`600`}>

			<div className={`firework-container`}>
				<div className={`firework fw-ani fw-pos-1`}></div>
				<div className={`firework fw-ani fw-pos-2`}></div>
				<div className={`firework fw-ani fw-pos-3`}></div>
				<div className={`firework fw-ani fw-pos-4`}></div>
			</div>
			<h2 className={`display-6`}>
				{`여러분들의 방문을`}
				<p>
					{`진심으로 `}<span className={`rainbow-text`}>{`환영`}</span>{`합니다.`}
				</p>
				<div className={`confetti`}>
					<Confetti />
				</div>
			</h2>
			{/* <p>{`웹 개발에 있어 FullStack을 지양하는 블로그가 되기위해 노력하겠습니다.`}</p> */}
			<p>{`WEB 개발에 있어 다양한 개발 지식을 다루는 전문적인 블로그가 되기 위해 노력하겠습니다. 😃`}</p>
		</div>
	</div>
));