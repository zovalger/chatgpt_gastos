import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
import TypingText from "../components/TypingText";
import styles from "../styles/Home.module.css";

export default function Home() {
	const r = useRouter();

	useEffect(() => {
		setTimeout(() => {
			r.push("/summary");
		}, 1100);
	}, []);

	return (
		<div className="container d-flex vh-100 px-3 flex-column justify-content-center align-items-center">
			<TypingText>Income and Expense Record</TypingText>
			<div className="svg-loader">
				<svg
					className="svg-container"
					height="100"
					width="100"
					viewBox="0 0 100 100"
				>
					<circle className="loader-svg bg" cx="50" cy="50" r="45"></circle>
					<circle
						className="loader-svg animate"
						cx="50"
						cy="50"
						r="45"
					></circle>
				</svg>
			</div>
		</div>
	);
}
