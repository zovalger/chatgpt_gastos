import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
	const r = useRouter();

	useEffect(() => {
		setTimeout(() => {
			r.push("/summary");
		}, 1000);
	}, []);

	return <Layout></Layout>;
}
