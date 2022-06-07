import "./styles/About.css";
import "../reusable_styles/BackgroundGlow.css";
import { useState, FunctionComponent } from "react";

interface participantsDefinition {
	map(x: (x: string) => JSX.Element): JSX.Element[];
	[index: number]: string;
}

interface activePeopleDefinition {
	[key: string]: boolean;
}

// class PeopleObjectTest {
// 	"timi" = false;
// 	"simon" = false;
// 	"bogdan" = false;
// }

class activePeopleProto {
	"timi" = false;
	"simon" = false;
	"bogdan" = false;

	constructor() {
		this["timi"] = false;
		this["simon"] = false;
		this["bogdan"] = false;
	}
}

export const About: FunctionComponent = () => {
	const [activePeople, setActivePeople] = useState(activePeopleProto);

	const participants: participantsDefinition = ["timi", "simon", "bogdan"];

	const personToggle = (person: string) => {
		const tempObj = new activePeopleProto();
		// tempObj[person] = true;
		// setActivePeople(tempObj);
		console.log(tempObj);
	};

	// personToggle("timi")
	const peopleComponent: JSX.Element[] = participants.map((x) => {
		return (
			<div className="person" key={x}>
				<div
					className="photo"
					onMouseEnter={() => {
						personToggle(x);
					}}
				></div>
				<div className="description">Lorem ipsum dolor sit amet.</div>
			</div>
		);
	});

	const header = (
		<>
			<div className="aboutBody">
				<div className="aboutTitle">The Project Of</div>
				<div className="backgroundGlow">
					<div className="aboutContent">{peopleComponent}</div>
				</div>
			</div>
		</>
	);

	return header;
};
