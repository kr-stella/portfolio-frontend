import React, { memo } from "react";

import { Active } from "../../..";
import { Magnifying } from "../../../../icon/magnifying";

import style from "./header.nav.right.module.scss";
import classNames from "classnames";

interface Define {active:Active; onActive:(v:keyof Active) => void;};
export const NavRight = memo(({ active, onActive }:Define) => (
	<div className={classNames(style[`nav-right`])}>
		<div className={classNames(style[`nav-icon`])} onClick={() => onActive(`modal`)}>
			<div className={classNames(style[`icon`], active.modal && style.close)}>
				{!active.modal? <Magnifying />:
				<i className={`fas fa-xmark`} />}
			</div>
		</div>
	</div>
));