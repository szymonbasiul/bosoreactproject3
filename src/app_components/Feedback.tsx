import "./styles/Feedback.css";
import "../reusable_styles/BackgroundGlow.css";

export function Feedback() {
	const header = (
		<>
			<div className="feedbackSection">
				<div className="backgroundGlow">
					<div className="feedbackWindow">
						<div className="feedbackHeader">Feedback</div>
						<div className="feedbackCards">
							<div className="feedCard">
								<div className="profilePhoto"></div>
								<div className="feedText">Lorem ipsum dolor sit amet.</div>
							</div>
							<div className="feedCard">
								<div className="profilePhoto"></div>
								<div className="feedText">Lorem ipsum dolor sit amet.</div>
							</div>
							<div className="feedCard">
								<div className="profilePhoto"></div>
								<div className="feedText">Lorem ipsum dolor sit amet.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);

	return header;
}
