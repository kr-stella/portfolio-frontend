import React, { memo } from "react";

import style from "./main.video.text.separator.module.scss";
import classNames from "classnames";

export const Separator = memo(() => (
	<div className={classNames(style.separator)} />
));