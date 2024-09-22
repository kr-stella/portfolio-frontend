import classNames from "classnames";
import React from "react";

import { Card, Welcome } from "./summary";
import style from "./summary/main.summary.module.scss";

const MainSummary = () => (
	<section>
		<div className={classNames(`container`, style[`summary-wrap`])}>
			<div className={classNames(style[`summary-box`])}>
				<Welcome />
				<Card />
			</div>
		</div>
	</section>
);

export default React.memo(MainSummary);