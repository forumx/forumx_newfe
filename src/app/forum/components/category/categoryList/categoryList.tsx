"use client"

import {useEffect, useState} from "react";
import {CategoryType} from "@/types/category";
import CategoryItem from "@/app/forum/components/category/categoryItem/categoryItem";

const CategoryList = () => {
	const [categoryList, setCategoryList] = useState<CategoryType[]> ([])
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_FORUM}/categories`, {
					method: 'GET',
					credentials: 'include'
				});
				
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				
				const data = await response.json();
				setCategoryList(data.content);
				// console.log(data);
			} catch (error) {
				console.error('Error fetching data:', error);
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