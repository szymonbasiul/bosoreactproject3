import "./styles/About.css";
import "../reusable_styles/BackgroundGlow.css";
import  { FunctionComponent } from "react";
import * as React from "react";

interface participantsDefinition {
	map(x: (x: string) => JSX.Element): JSX.Element[];
	[index:number] : string
}

export const About: FunctionComponent= () => {
	// function participantsProto (){
	// 	this.["timi"]= false,
	// 	this.["simon"] = false,
	// 	this.["bogdan"] = false
	// }

	// const participants: string[] = ["timi", "simon", "bogdan"]
	const participants: participantsDefinition = ["timi", "simon", "bogdan"]

	const peopleComponent: JSX.Element[] = participants.map( x => {
		return(
			<div className="person">
							<div className="photo"></div>
							<div className="description">Lorem ipsum dolor sit amet.</div>
						</div>
		)
	})
	const header = (
		<>
			<div className="aboutBody">
				<div className="aboutTitle">The Project Of</div>
				<div className="backgroundGlow">
					<div className="aboutContent">
						{peopleComponent}
					</div>
				</div>
			</div>
		</>
	);

	return header;
}
