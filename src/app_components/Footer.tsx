import "./styles/Footer.css";

export function Footer() {
	return (
		<div className="footerSection">
			<div className="footerIcons">
				<div className="socialIcon">
					<div className="fa fa-facebook"></div>
				</div>
				<div className="socialIcon">
					<img
						alt="linkedin"
						src="https://img.icons8.com/glyph-neue/100/000000/linkedin-circled.png"
					/>
				</div>
				<div className="socialIcon">
					<img
						alt="whatsapp"
						src="https://img.icons8.com/ios-filled/100/000000/whatsapp--v1.png"
					/>
				</div>
			</div>
		</div>
	);
}
