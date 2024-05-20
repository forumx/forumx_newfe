import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.scss"

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={"forum-page"}>
			<div className={"forum-content"}>
				{children}
			</div>
		</div>
	);
}