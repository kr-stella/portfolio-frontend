import React, { memo } from "react";

import style from "./main.video.text.header.module.scss";
import classNames from "classnames";

export const Header = memo(() => (
	<p className={classNames(style[`header`])}>
		{`I LOVE WHAT I DO`}
	</p>
));