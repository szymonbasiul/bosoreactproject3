import Button from "../reusable_components/Button";
import { ImgPicker } from "../reusable_components/ImgPicker";
import "./styles/Navbar.css";

export function Navbar() {
	const header = (
		<>
			<Button buttonName={"Home"} />
			<Button buttonName={"About"} />
			<img
				className="logotype"
				src={ImgPicker("bosoreactprojectlogo")}
				alt="logo"
			/>
			<Button buttonName={"Work"} />
			<Button buttonName={"Contact"} />
		</>
	);

	return header;
}
