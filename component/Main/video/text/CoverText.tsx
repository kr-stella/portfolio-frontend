import React, { memo } from "react";

import { Header } from "./header";
import { Typing } from "./typing";
import { Separator } from "./separator";
import { Lead } from "./lead";
import { Button } from "./button";

import style from "./main.video.text.module.scss";
import classNames from "classnames";

export const CoverText = memo(() => (
	<div className={classNames(`container`, style[`text-wrap`])}>
		<div className={classNames(style[`text-box`])}>
			<div className={classNames(style[`text-container`])}>
				<Header />
				<Typing />
				<Separator />
				<Lead />
				<Button />
			</div>
		</div>
	</div>
));