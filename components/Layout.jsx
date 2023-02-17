import Head from "next/head";
// import Footer from "./Footer";

import NavBar from "./NavBar";

export default function Layout({ children }) {

	const namePage = "Income and Expense Record"
	return (
		<>
			<Head>
				<link rel="icon" href="/IMG_20230216_170039_985.jpg" />

				<title>{namePage}</title>
			</Head>

			<NavBar name={namePage} />

			<main className="container pb-5 ">{children}</main>

			{/* <Footer /> */}
		</>
	);
}
