import React, { lazy, useCallback } from "react";

// import { INIT_SERVER } from "../../../../config/init/Server";

// const InputHeader = lazy(() => import("../../../input").then(module => ({ default: module.Header })));

interface Define {onClose:() => void;};
const Search = ({ onClose }:Define) => {

	/**
	 * URL에서 query 추출
	 * 단, 이 경우는 통합검색이기 때문에, 통합검색 서버의 query를 추출하도록 함.
	*/
	// const getQuery = useCallback((v:string) => {
	// 	if(INIT_SERVER[mode].search === window.location.origin)
	// 		return new URLSearchParams(window.location.search).get(v);
	// 	else return null;
	// }, [mode]);

	// /** 통합검색 */
	// const onSearch = useCallback((v:string) => {
	// 	window.location.href = `${INIT_SERVER[mode].search}/?query=${v}`;
	// }, []);

	return (
	<div className={`search-box`}>
		<div className={`search-container`}>
			{/* <InputHeader
				active={active}
				query={getQuery(`query`) ?? ``}
				onSearch={onSearch}
				onClose={onClose}
			/> */}
			<input type={`text`} />
			<div className={`cloud_box`}>
				<div className={`inline-flex ai-c ji-c gap6`}>
					<i className={`fad fa-cloud-upload`} />
					<a className={`link-hover-underline`}>{`데이터 CLOUD SECTION`}</a>
				</div>
			</div>
		</div>
	</div>
	);

};

export default React.memo(Search);