import "./styles/Blog.css";
import "../reusable_styles/BackgroundGlow.css";

export function Blog() {
	const header = (
		<>
			<div className="BlogSection">
				<div className="BackgroundGlow">
					<div className="BlogWindow">
						<div className="BlogHeader">BoSoBlog</div>
						<div className="TextOfBlog"></div>
					</div>
				</div>
			</div>
		</>
	);

	return header;
}
