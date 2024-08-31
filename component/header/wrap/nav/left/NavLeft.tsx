import React, { memo, ReactNode, useEffect, useRef } from "react";

import { Active } from "../../.."
import { VinylRecord } from "../../../../icon/vinyl-record";

import style from "./header.nav.left.module.scss";
import classNames from "classnames";

interface Define {onActive:(v:keyof Active) => void; onOption:() => void;};
export const NavLeft = memo(({ onActive, onOption }:Define) => (
	<ul className={classNames(style[`nav-left`])}>
		<li className={classNames(style[`nav-item`])} onClick={() => onActive(`side`)}>
			<div className={classNames(style[`icon`], style.vinyl)} tool-tip={`사이드바 메뉴`}>
				<VinylRecord />
			</div>
		</li>
		<li className={classNames(style[`nav-item`])} onClick={onOption}>
			<p className={classNames(style[`nav-link`])}>{`Option Test`}</p>
		</li>
	</ul>
));