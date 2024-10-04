import React, { memo } from "react";

import style from "./main.video.text.lead.module.scss";
import classNames from "classnames";

export const Lead = memo(() => (
	<p className={classNames(style.lead)}>{`안녕 세계! 나에게 프로그래밍 세상을 보여줘서 고마워`}</p>
));