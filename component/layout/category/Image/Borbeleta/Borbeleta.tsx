import classNames from "classnames";
import React, { memo } from "react";

import style from "./borbeleta.module.scss";

export const Borbeleta = memo(() => (
	<div className={classNames(style.borboletas)}>
		<div className={`borboleta-1`}>
			<div className={classNames(style[`borboleta-oval-squish`])}>
				<div className={classNames(style[`borboleta-oval`])}>
					<div className={classNames(style[`borboleta-radial`])}>
						<div className={classNames(style[`borboleta-gfx`])}>
							<div className={classNames(style[`borboleta-anim`])} />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={`borboleta-2`}>
			<div className={classNames(style[`borboleta-oval-squish`])}>
				<div className={classNames(style[`borboleta-oval`])}>
					<div className={classNames(style[`borboleta-radial`])}>
						<div className={classNames(style[`borboleta-gfx`])}>
							<div className={classNames(style[`borboleta-anim`])} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
));