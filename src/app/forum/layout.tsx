import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.scss"
import FetchAccount from "@/components/auth/fetchAccount";
import Header from "@/components/layout/header/header";
import React from "react";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			
			
			<div className={"forum-page"}>
				<div className={"forum-content"}>
					{children}
				</div>
			</div>
		</div>
		
	);
}
