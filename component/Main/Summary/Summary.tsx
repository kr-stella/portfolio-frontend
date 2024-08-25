import React, { memo } from "react";

import Styles from "./summary.module.scss";
import classNames from "classnames";

export const Summary = memo(() => {

	return (
	<section>
		<div className={classNames(
			`container`,
			Styles[`summary-wrap`]
		)}
		style={{
			height: `97vh`
		}}
		>
		{`zzgdgdgdgd`}
		</div>
	</section>
	);

});