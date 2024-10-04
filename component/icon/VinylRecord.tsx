import React from "react";

export const VinylRecord = () => (
	<svg className={`fa-compact-disc fa-spin fa-2x`}
		preserveAspectRatio={`none`}
		width={32}
		height={32}
		viewBox={`0 0 496 512`}
		xmlns={`http://www.w3.org/2000/svg`}
	>
		<path
			d={`M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z`}
		/>
	</svg>
);

export default React.memo(VinylRecord);