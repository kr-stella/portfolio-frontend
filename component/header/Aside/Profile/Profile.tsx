import classNames from "classnames";
import React from "react";

import style from "./header.aside.profile.module.scss";

const Profile = () => (
	<div className={classNames(style[`aside-profile`])}>
		<div className={classNames(style[`profile-image`])} />
		<div className={classNames(style.profile)}>
			<p>{`Stella Dev 👨‍💻`}</p>
			<span>{`오수민`}</span>
		</div>
	</div>
);

export default React.memo(Profile);