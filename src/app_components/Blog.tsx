import "./styles/Blog.css";
import "../reusable_styles/BackgroundGlow.css";

export function Blog() {
	const header = (
		<>
			<div className="blogSection">
				<div className="backgroundGlow">
					<div className="blogWindow">
						<div className="blogHeader">BoSoBlog</div>
						<div className="textOfBlog"></div>
					</div>
				</div>
			</div>
		</>
	);

	return header;
}
