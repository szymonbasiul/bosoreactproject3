import "./styles/Projects.css";
import "../reusable_styles/BackgroundGlow.css";

export function Projects() {
	const body = (
		<div className="projectBody">
			<div className="projectTitle">Our Projects</div>
			<div className="projectsSlider">
				<div className="arrow left "></div>
				<div className="project backgroundGlow"> 1st</div>
				<div className="project backgroundGlow"> 2nd</div>
				<div className="project backgroundGlow"> 3rd</div>
				<div className="arrow right"></div>
			</div>
		</div>
	);

	return body;
}
