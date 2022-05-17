import React from "react";
import "./App.css";
import { Navbar } from "./app_components/Navbar";
import { About } from "./app_components/About";
import { Blog } from "./app_components/Blog";
import { Feedback } from "./app_components/Feedback";
import { Projects } from "./app_components/Projects";
import { Footer } from "./app_components/Footer";

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
		<div className="mainPage">
			<div className="layer">
				<div className="app">
					<nav>
						<Navbar />
					</nav>
					<About />
					<Projects />
					<Blog />
					<Feedback />
					<Footer />
				</div>
			</div>
		</div>
	);

	return mainPage;
}
