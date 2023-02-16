import Head from "next/head";
// import Footer from "./Footer";

import NavBar from "./NavBar";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/GoThere_20221130.svg" />
			</Head>

			<NavBar />

			<main className="container pb-3 bg-light">{children}</main>

			{/* <Footer /> */}
		</>
	);
}
