import "./index.css";
import "./head.css";
import "./but.css";
import "./body.css";
// import Head from "./components/head/head";
// import Body from "./components/body/body";
import React, { useState } from "react";

function App() {
	const [isOn, setIsOn] = useState(false);

	const handleClick = () => {
		setIsOn(!isOn);
	};

	return (
		<div className="App">
			<div className="conteiner">
				<div className={isOn ? "head " : " head-w"}>
					<img src={"./image/head/logo.svg"} alt="logo" />

					<button className={isOn ? "on " : " off"} onClick={handleClick}>
						{isOn ? "DAY" : "NIGHT"}
					</button>
				</div>
				<div className={isOn ? "body " : " body-w"}>
					<h1 className={isOn ? "body__title " : " body__title-w"}>
						Fun facts about React
					</h1>
					<ul className="body__list">
						<li className="body__item">
							<p className={isOn ? "body__text " : " body__text-w"}>
								{" "}
								Was first released in 2013
							</p>
						</li>
						<li className="body__item">
							<p className={isOn ? "body__text " : " body__text-w"}>
								{" "}
								Was originally created by Jordan Walke
							</p>
						</li>
						<li className="body__item">
							<p className={isOn ? "body__text " : " body__text-w"}>
								{" "}
								Has well over 100K stars on GitHub
							</p>
						</li>
						<li className="body__item">
							<p className={isOn ? "body__text " : " body__text-w"}>
								{" "}
								Is maintained by Facebook
							</p>
						</li>
						<li className="body__item">
							<p className={isOn ? "body__text " : " body__text-w"}>
								{" "}
								Powers thousands of enterprise apps, including mobile apps
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
