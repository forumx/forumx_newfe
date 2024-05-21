"use client"

import {Dropdown, MenuProps} from "antd";
import Link from "next/link";
import {DownOutlined} from "@ant-design/icons";
import "./header.scss"
import {callLogOut} from "@/apis/user/auth.api";



const Header = () => {
	const handleLogOut = async() => {
		await callLogOut()
			.then((res) => {
				
				
				window.location.href = res.data.redirectUrl;
			})
			.catch((err) => {
				console.error(err);
			});
	}
	
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link href="/profile">
					Profile
				</Link>
			),
		},
		{
			key: '2',
			label: (
				<div onClick={handleLogOut}>
					Log out
				</div>
			),
		},
	];
	
	return (
		<div className={"header-wrapper"}>
			<div className={"header-content"}>
				<Link href={"/"}>FORUMX</Link>
				<div>
					<Link href={"/dashboard"}>Dashboard</Link>
					<Link href={"/forum"} className={"forum-link"}>Forum</Link>
					<Dropdown menu={{ items }} className={"dropdown"}>
						<a onClick={(e) => e.preventDefault()}>
								Welcome to ForumX
								<DownOutlined />
						</a>
					</Dropdown>
				</div>
			</div>
		</div>
	)
}

export default Header;