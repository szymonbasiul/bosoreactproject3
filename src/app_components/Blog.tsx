import "./styles/Blog.css";
import "../reusable_styles/BackgroundGlow.css";

export function Blog() {
	const header = (
		<>
			<div className="blogBody">
				<div className="blogTitle">BoSo Blog</div>
				<div className="backgroundGlow">
					<div className="blogWindow">
						<div className="textOfBlog"></div>
					</div>
				</div>
			</div>
		</>
	);

	return header;
}
