import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import TotalesResumen from "../components/TotalesResumen";
import Transaction from "../components/Transaction";

const Summary = () => {
	const [transactions, setTransactions] = useState([
		{
			_id: 2,
			category: ".....",
			description: ".....",
			amount: ".....",
			date: new Date(),
			type: "income",
		},
		{
			_id: 3,
			category: ".....",
			description: ".....",
			amount: ".....",
			date: new Date(),
			type: "expense",
		},
	]);

	useEffect(() => {
		axios
			.get("/api/transactions")
			.then((res) => setTransactions(res.data.transactions))
			.catch((err) => console.log(err));
	}, []);

	const income = transactions
		.filter((transaction) => transaction.type === "income")
		.reduce((acc, transaction) => acc + transaction.amount, 0);

	const expense = transactions
		.filter((transaction) => transaction.type === "expense")
		.reduce((acc, transaction) => acc + transaction.amount, 0);

	return (
		<Layout>
			<h3 className="mt-3">Resumen</h3>
			<TotalesResumen totalIngreso={income} totalGasto={expense} />

		

			{transactions.map((tran) => (
				<Transaction key={tran._id} data={tran} />
			))}

	
		</Layout>
	);
};

export default Summary;
