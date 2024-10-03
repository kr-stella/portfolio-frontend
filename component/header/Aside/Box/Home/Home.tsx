import classNames from "classnames";
import React from "react";

import style from "./header.aside.box.home.module.scss";

const Home = () => {
	return (
	<li>
		<a /* href={INIT_SERVER[mode].home} */ className={classNames(style.house)} /* onClick={(e) => onRedirect(e)} */>
			<i className={`fad fa-house-chimney`} />
			<p>{`홈`}</p>
		</a>
	</li>
	);

};

export default React.memo(Home);