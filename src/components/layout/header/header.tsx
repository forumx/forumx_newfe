import {Dropdown} from "antd";

const Header = () => {
	return (
		<div className={"header"}>
			<div className={"category-dropdown"}>Categories</div>
			<Dropdown>
				Hello user
			</Dropdown>
		</div>
	)
}

export default Header;