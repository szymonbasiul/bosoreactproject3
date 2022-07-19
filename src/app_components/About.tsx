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
	"simon" = true;
	"timi" = true;
	"bogdan" = true;

	constructor() {
		this["simon"] = true;
		this["timi"] = true;
		this["bogdan"] = true;
	}
}

export const About: FunctionComponent = () => {
	const [activePeople, setActivePeople] = useState<activePeopleDefinition>(new ActivePeopleProto());

	const participants: participantsDefinition = ["simon","timi", "bogdan"];
	
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
				<img
					className="photo" src={require(`../assets/images/personImg/${person}.png`)} alt="default"
					onMouseEnter={() => {
						personToggle(person);
					}}
					onMouseLeave={()=> { 
						setActivePeople(new ActivePeopleProto())
					}}
				>
				</img>
				<div className="name">{person}</div>
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
