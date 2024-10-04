import React, { memo, useEffect, useRef } from "react";
import Typed from "typed.js";

import style from "./main.video.text.typing.module.scss";
import classNames from "classnames";

export const Typing = memo(() => {

	const typedRef = useRef<Typed|null>(null);
	const ref = useRef<HTMLSpanElement|null>(null);
	useEffect(() => {

		if(typeof window === `undefined` || typedRef.current)
			return;

		import(`typed.js`).then(({ default: Typed }) => {
			if(ref.current && !typedRef.current) {
				typedRef.current = new Typed(ref.current, {
					strings: ["Java", "Python", "Javascript", "Typescript", "Kotlin", "PHP", "Node.js", "Spring"],
					typeSpeed: 50,
					backSpeed: 25,
					backDelay: 2000,
					loop: true,
					showCursor: true,
					cursorChar: `|`
				});
			}
		});

		return () => {
			if(typedRef.current) {
				typedRef.current.destroy();
				typedRef.current = null;
			}
		};

	}, []);

	return (
	<h2 className={classNames(style[`typing-wrap`])}>
		{` Hello World ! `}
		<br />
		{` Let's Get it `}
		<br className={classNames(style[`typing-br`])} />
		<span ref={ref} className={classNames(style.typing)} />
	</h2>
	);

});