// import React, { memo, useCallback } from "react";

// import { INIT_FILE_EXTENSIONS } from "../../../config/init/File";

// interface Define {name:string;};
// export const FileIcon = memo(({ name }:Define) => {

// 	// 파일로고
// 	const getLogo = useCallback((v:string) => {
		
// 		if(INIT_FILE_EXTENSIONS.vedio.includes(v))
// 			return `fas fa-clapperboard-play`;
			
// 		if(INIT_FILE_EXTENSIONS.image.includes(v))
// 			return `fas fa-image`;
		
// 		if(INIT_FILE_EXTENSIONS.audio.includes(v))
// 			return `fas fa-compact-disc`;
			
// 		if(INIT_FILE_EXTENSIONS.pdf.includes(v))
// 			return `fas fa-file-pdf`;
		
// 		if(INIT_FILE_EXTENSIONS.document.includes(v))
// 			return `fas fa-file-invoice`;
			
// 		if(INIT_FILE_EXTENSIONS.zip.includes(v))
// 			return `fas fa-file-zipper`;

// 		return `fas fa-paperclip`;

// 	}, []);

// 	return <i className={getLogo(name.substring(name.lastIndexOf(`.`) + 1).toLowerCase())} />;

// });