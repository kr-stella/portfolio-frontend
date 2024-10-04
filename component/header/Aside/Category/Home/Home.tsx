import classNames from "classnames";
import React from "react";

import style from "./header.aside.category.home.module.scss";

const Home = () => (
	<a href={`/`} className={classNames(style.link, style[`gradient-text`])}>
		{`Root`}
	</a>
);

export default React.memo(Home);