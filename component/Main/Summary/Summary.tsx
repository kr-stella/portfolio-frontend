import React, { memo } from "react";

import style from "./summary.module.scss";
import classNames from "classnames";

export const Summary = memo(() => {

	return (
	<section>
		<div className={classNames(`container`, style[`summary-wrap`])}
		style={{
			height: `120vh`,
			boxSizing: `border-box`
		}}
		>
		{`zzgdgdgdgd`}
		</div>
	</section>
	);

});