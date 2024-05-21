"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {StoreProvider} from "@/redux/storeProvider";
import React, {Suspense} from "react";
import Header from "@/components/layout/header/header";
import FetchAccount from "@/components/auth/fetchAccount";
import {usePathname} from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const pathName = usePathname();
	console.log(pathName)
	
  return (
	  <StoreProvider>
		  <html lang="en">
			<body>
				<Suspense fallback={<div>Loading...</div>}>
					<Header/>
					{pathName !== '/redirect' && pathName !== '/login/oauth2/code/auth0' && <FetchAccount/>}
					{children}
				</Suspense>
			</body>
			
		  </html>
	  </StoreProvider>
   
  );
}
