import classNames from "classnames";
import React from "react";

import style from "./header.aside.box.info.module.scss";

const User = () => {

	return (
	<li>
		<a className={classNames(style.info)}/* href={`${INIT_SERVER[mode].home}/info`} className={`info`} onClick={(e) => onRedirect(e)} */>
			<i className={`fad fa-user-tie`} />
			<p>{`내 정보`}</p>
		</a>
	</li>
	);

};

export default React.memo(User);