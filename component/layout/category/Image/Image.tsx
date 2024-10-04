import classNames from "classnames";
import React, { memo, useCallback, useEffect, useState } from "react";

import { RANDOM_IMAGE_ARRAY } from "@init";

import { Borbeleta } from "./Borbeleta";
import style from "./image.module.scss";
import { Wave } from "./Wave";

export const Image = memo(() => {

	const [images, setImages] = useState<string[]>([]);

	const arrIdx: number[] = [];
	const isEqual = useCallback((v: number) =>
		arrIdx.find((a) => a === v) !== undefined, []);

	useEffect(() => {
		while (arrIdx.length < 6) {
			const ran = Math.floor(Math.random() * RANDOM_IMAGE_ARRAY.length);
			if (!isEqual(ran)) {
			arrIdx.push(ran);
			}
		}

		const select = arrIdx.map(index => RANDOM_IMAGE_ARRAY[index]);
		setImages(select);
	}, []);

	return (
	<section className={classNames(style[`image-wrap`])}>
		<ul className={classNames(style[`image-box`])}>
			{images.map((img, index) => (
			<li key={index} className={classNames(style.image)} style={{ backgroundImage: `url(${img})` }}>
				{/* 이미지 또는 추가적인 내용을 여기에 표시 */}
			</li>
			))}
		</ul>
		<Wave />
		<Borbeleta />
	</section>
	);

});