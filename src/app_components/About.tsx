import "./styles/About.css";
import "../reusable_styles/BackgroundGlow.css";
import { useState } from "react";
interface personDescription {
	[key: string]: boolean;
}

export function About() {
	// blur other ones when photo is active and resize that
	function personType(): personDescription {
		this["timi"] = false;
		this["bogdan"] = false;
		this["simon"] = false;
	}
	const [activePerson, setActivePerson] = useState(new personType());
	//create a state that will be represented in an object
	//timi: false
	//bogdan: false
	// Simon : false
	const changeActivePerson = (toggledPerson: string) => {
		const tempObj = new personType();
		tempObj[toggledPerson] = true;
		setActivePerson(tempObj);
		return null;
	};
	//changeActivePerson(people.Timi);
	// console.log(tempObj);
	// function that will change the written attribute into true
	// function(attribute)
	// const result = function(timi)        timi equals true others false

	// mapping whole about content and by results creating className in each person/photo
	const participants = ["timi", "simon", "bogdan"];

	const participantsContainer = participants.map((x) => {
		return (
			<div className={false ? "person" : "personBlured"}>
				<div className="photo"></div>
				<div className="description">Lorem ipsum dolor sit amet.</div>
			</div>
		);
	});

	const header = (
		<>
			<div className="aboutBody">
				<div className="aboutTitle">The Project Of</div>
				<div className="backgroundGlow">
					<div className="aboutContent">{participantsContainer}</div>
				</div>
			</div>
		</>
	);

	return header;
}
