import React, { createContext, useState } from "react";
export const authDataContext = createContext();

function AuthContext({ children }) {
	// Define multiple server URLs
	const developmentUrl = "http://localhost:8000";
	const productionUrl = "https://airbnb-backend-90nk.onrender.com"; // Replace with your actual production URL

	// Determine which URL to use based on environment
	const serverUrl =
		import.meta.env.MODE === "production" ? productionUrl : developmentUrl;

	// You can also expose both URLs if needed
	let [loading, setLoading] = useState(false);

	let value = {
		serverUrl,
		developmentUrl,
		productionUrl,
		loading,
		setLoading,
	};

	return (
		<authDataContext.Provider value={value}>
			{children}
		</authDataContext.Provider>
	);
}

export default AuthContext;
