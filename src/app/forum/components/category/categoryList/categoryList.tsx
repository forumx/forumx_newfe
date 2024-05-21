"use client"

import {useEffect, useState} from "react";
import {CategoryType} from "@/types/category";
import CategoryItem from "@/app/forum/components/category/categoryItem/categoryItem";
import {callGetAllCategories} from "@/apis/forum/categories.api";

const CategoryList = () => {
	const [categoryList, setCategoryList] = useState<CategoryType[]> ([])
	
	useEffect(() => {
		const fetchData = async () => {
				const response = await callGetAllCategories();
				if(response.status === 200) {
					setCategoryList(response.data.content);
				}
		};
		
		fetchData();
	}, []);
	
	return (
		<>
			{categoryList.map(category => (
				<CategoryItem key={category.id} category={category}/>
			))}
		</>
	)
}

export default CategoryList