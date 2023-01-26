import Head from "next/head";
import Image from "next/image";
import ExpenseTracker from "../components/ExpenseTracker";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<ExpenseTracker />
		</div>
	);
}
