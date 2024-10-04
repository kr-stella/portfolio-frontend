import classNames from "classnames";
import React from "react";

import { Active } from "@type/Header";

import style from "./header.cover.module.scss";

interface Define {active:Active; onClose:() => void;};
const Cover = ({ active, onClose }:Define) => (
	<div className={classNames(
		style.cover, Object.values(active).some(a => a) && style.on
	)} onClick={onClose} />
);

export default React.memo(Cover);