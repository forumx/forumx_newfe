"use client"

import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {UserOutlined} from "@ant-design/icons";
import {Avatar} from "antd";
import React from "react";
import "./profile.scss"

const ProfilePage = () => {
	const user = useSelector((state: RootState) => state.account.user)
	
	return (
			<div className={"profile-wrapper"}>
				<div className={"avatar-wrapper"}>
					<Avatar
						className={"avatar"}
						size={64}
						icon={<UserOutlined />}
						src={user.img_url}
					/>
				</div>
				<div className={"user-info"}>
					<div className={"user-info-item"}>
						<label htmlFor="">Email:</label>
						<p>{user.username}</p>
					</div>
					<div className={"user-info-item"}>
						<label htmlFor="">Name:</label>
						<p>{user.name}</p>
					</div>
				</div>
			</div>
		
	)
}

export default ProfilePage;