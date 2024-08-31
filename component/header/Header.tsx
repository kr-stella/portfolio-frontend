import React, { memo } from "react";

import { Active } from ".";
import { HeaderWrap } from "./wrap";

import style from "./header.module.scss";
import classNames from "classnames";

interface Define {active:Active; onActive:(v:keyof Active) => void; onClose:() => void; onOption:() => void;};
export const Header = memo(({ active, onActive, onClose, onOption }:Define) => (<>
	<header className={classNames(style.header)}>
		<HeaderWrap active={active} onActive={onActive} onClose={onClose} onOption={onOption} />
	</header>
	<aside>
		<div className={`sidebar`}>
			<div className={`_side`}>

				<div className={`usr_bg`}></div>
				<div className={`profile`}>
					<img src={`/image/usr_v2.png`} />
					{/* <Link to={`/`} className={`align_c`}>
						<p className={`nudge_text mt_8`}>
							<span className={`rainbow_text`}>FullStack Developer</span>
						</p>
						<p className={`clr_8`}>오수민</p>
					</Link> */}
				</div>
				<nav className={`side_menu`}>
					<ul className={`col_category`}></ul>
				</nav>

			</div>
		</div>
	</aside>
</>));