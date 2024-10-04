import React, { memo } from "react";

import style from "./main.video.text.button.module.scss";
import classNames from "classnames";

export const Button = memo(() => (
	<a href={`#firstSection`} className={classNames(style.button)}>
		<div className={classNames(style.arrow)}>
			<i className={classNames(
				`fal`, `fa-angle-down`,
				style[`arrow-size`]
			)} />
		</div>
	</a>
));