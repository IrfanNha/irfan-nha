import React from "react";

const Loader: React.FC = () => {
	return (
		<div className="loader-container">
			<div className="loader"></div>
			<style jsx>{`
				.loader-container {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
				}
				.loader {
					border: 8px solid #f3f3f3;
					border-radius: 50%;
					border-top: 8px solid #3498db;
					width: 50px;
					height: 50px;
					animation: spin 1.5s linear infinite;
				}
				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			`}</style>
		</div>
	);
};

export default Loader;
