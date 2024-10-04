import React, { lazy } from "react";

import { Active } from "@type/Header";

const Main = lazy(() => import("./Main"));
const Aside = lazy(() => import("./Aside"));
const Cover = lazy(() => import("./Cover"));

interface Define {active:Active; onActive:(v:keyof Active) => void; onClose:() => void; onOption:() => void;};
const Header = ({ active, onActive, onClose, onOption }:Define) => (
	<>
		<Main active={active} onActive={onActive} onClose={onClose} onOption={onOption} />
		<Aside active={active.side} onActive={onActive} />
		<Cover active={active} onClose={onClose} />
	</>
);

export default React.memo(Header);