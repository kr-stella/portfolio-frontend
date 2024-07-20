const path = require(`path`);

const isProduction = process.env.NODE_ENV === `production`;
const isDeployment = process.env.NODE_ENV === `deployment`;
const isDevelopment = process.env.NODE_ENV === `development`;

/**
 * resolve로 하게되면 C드라이브부터 전체 경로가 출력됨.
 * typescript 설정하는 부분에 해당 경로로 입력되면 C드라이브/.../프로젝트/C드라이브 이렇게 설정됨
*/
const tsconfigPath = path.join(`config`, isDevelopment? `tsconfig-dev.json`:`tsconfig-prod.json`);
const resolvePath = (v) => path.resolve(__dirname, v);
const resolveLink = (v) => path.resolve(__dirname, v);
module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	// env: {
	// 	API_HOST: isProduction ? `https://api.intra.captivision.co.kr` : (isDeployment ? `https://api.dev.captivision.co.kr` : `http://localhost:9000`),
	// 	MAIN_HOST: isProduction ? `https://project.intra.captivision.co.kr` : (isDeployment ? `https://project.dev.captivision.co.kr` : `http://localhost:8084`)
	// }
	env: {
		MAIN_HOST: `http://localhost:8080`
		// API_HOST: `http://localhost:8080/api`,
		// MAIN_HOST: `http://localhost:8084/api`,
		// LOGOUT_HOST: `http://localhost:8084/logout`
	},
	/** 이게 중요함 */
	typescript: { tsconfigPath },
	webpack: (config) => {

		config = {
			...config,
			stats: { errorDetails: true },
			resolve: {
				...config.resolve,
				symlinks: false,
				/* alias: {
					...config.resolve.alias,
					"@component": resolvePath("component/common"),
					"@view": resolvePath("component/view"),
					"@type": resolvePath("config/type"),
					"@init": resolvePath("config/init"),
					"@reducer": resolvePath("config/reducer"),

					"@common": resolveLink(`component`),
					"@config": resolveLink(`config`),
					"@style": resolveLink("style/scss"),
					"@image": resolveLink("style/image"),
					"@font": resolveLink("style/font")
				} */
			}
		};

		return config;

	}
	
};