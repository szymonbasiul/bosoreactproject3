import "./styles/About.css";
import "../reusable_styles/BackgroundGlow.css";
import { useState, FunctionComponent } from "react";

interface participantsDefinition {
	map(x: (x: string) => JSX.Element): JSX.Element[];
	[index: number]: string;
}

interface activePeopleDefinition {
	 [key: string]: boolean | any;
} 

class ActivePeopleProto {
	"timi" = true;
	"simon" = true;
	"bogdan" = true;

	constructor() {
		this["timi"] = true;
		this["simon"] = true;
		this["bogdan"] = true;
	}
}

export const About: FunctionComponent = () => {
	const [activePeople, setActivePeople] = useState<activePeopleDefinition>(new ActivePeopleProto());

	const participants: participantsDefinition = ["timi", "simon", "bogdan"];
	
	const turnAllPeopleFalse = ()=>{
		let tempObj: activePeopleDefinition = new ActivePeopleProto();
		Object.keys(tempObj).forEach((key)=>{
			tempObj[key] = false;
		})
			return tempObj;
	} 

	const personToggle = (person:string ) => {
		let tempObj: activePeopleDefinition = turnAllPeopleFalse();
		tempObj[person] = true;
		setActivePeople(tempObj)
		
	};


	// personToggle("timi")
	const peopleComponent: JSX.Element[] = participants.map((person) => {
		return (
			<div className={activePeople[person] ? "person": "personBlured"} key={person}>
				<div
					className="photo"
					onMouseEnter={() => {
						personToggle(person);
					}}
					onMouseLeave={()=> { 
						setActivePeople(new ActivePeopleProto())
					}}
				></div>
				<div className="description">Lorem ipsum dolor sit amet.</div>
			</div>
		);
	});

	const header = (
		<>
			<div className="aboutBody">
				<div className="aboutTitle">The Project Of:</div>
				<div className="backgroundGlow">
					<div className="aboutContent">{peopleComponent}</div>
				</div>
			</div>
		</>
	);

	return header;
};
