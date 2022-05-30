import "./styles/About.css";
import "../reusable_styles/BackgroundGlow.css";

export function About() {
	const header = (
		<>
			<div className="aboutBody">
				<div className="aboutTitle">The Project Of</div>
				<div className="backgroundGlow">
					<div className="aboutContent">
						<div className="person">
							<div className="photo"></div>
							<div className="description">Lorem ipsum dolor sit amet.</div>
						</div>
						<div className="person">
							<div className="photo"></div>
							<div className="description">Lorem ipsum dolor sit amet.</div>
						</div>
						<div className="person">
							<div className="photo"></div>
							<div className="description">Lorem ipsum dolor sit amet.</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);

	return header;
}
