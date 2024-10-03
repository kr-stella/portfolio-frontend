import classNames from "classnames";
import React from "react";

import style from "./header.aside.top.module.scss";

const Top = () => (
	<div className={classNames(style[`aside-top`])} />
);

export default React.memo(Top);