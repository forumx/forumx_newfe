"use client"

import React from "react";
import {CategoryType} from "@/types/category";
import ThreadList from "@/app/forum/components/thread/threadList/threadList";
import "./categoryItem.scss"

interface CategoryItemProp {
	category: CategoryType;
}

const CategoryItem:React.FC< CategoryItemProp> = ({category}) => {
	return (
		<div className={"category-wrapper"}>
			<div className={"category-info"}>
				{category.name}
			</div>
			<ThreadList categoryId={category.id}/>
		</div>
	)
}

export default CategoryItem