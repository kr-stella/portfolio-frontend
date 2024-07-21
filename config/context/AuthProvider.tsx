// import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
// import { useRouter } from "next/router";
// import { axiosMain } from "../Axios";

// const AuthContext = createContext({});
// export const AuthProvider = ({ children }) => {

// 	const [ auth, setAuth ] = useState(false);
// 	const router = useRouter();

// 	const isLogin = useCallback(async() => {
// 		// const response = await api.post(`/validate`);
// 		// axios
// 		const response = await axiosMain.get(`/profile`);
// 		console.log(response.data);
// 		if(!response.data) router.push(`/login`);
// 		// else router.push(`/looug`);
// 		// console.log(`?`)
// 	}, [router.pathname]);
	
// 	useEffect(() => {
// 		isLogin();
// 	}, [isLogin]);

// 	return (
// 	<AuthContext.Provider value={{ auth }}>
// 		{children}
// 	</AuthContext.Provider>
// 	);

// };

// export const useAuth = () => useContext(AuthContext);