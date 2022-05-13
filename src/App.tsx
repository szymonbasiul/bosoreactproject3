import React from "react";
import "./App.css";
import { Navbar } from "./app_components/Navbar";
import { About } from "./app_components/About";
import { Blog } from "./app_components/Blog";

//TODO check best interface name practices

interface MainPageDefinition {}

export default function App(props: MainPageDefinition) {
	/*
div outer container
contains main component
 	div main component
		everything els in application
	div/
div/
	*/
	const mainPage = (
		<div className="MainPage">
			<div className="Layer">
				<div className="App">
					<nav>
						<Navbar />
					</nav>
					<About />
					<Blog />
				</div>
			</div>
		</div>
	);

	return mainPage;
}
