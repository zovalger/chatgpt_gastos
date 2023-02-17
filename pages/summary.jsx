import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import TotalesResumen from "../components/TotalesResumen";
import TransactionItem from "../components/TransactionItem";
import connectDb from "../lib/db";
import Transaction from "../models/Transaction";

// todo: hacer que los datos vengan ya renderizados desde el servidor

const Summary = ({ transactionsData }) => {
	console.log(transactionsData);
	const [transactions, setTransactions] = useState(transactionsData);

	// useEffect(() => {
	// 	axios
	// 		.get("/api/transactions")
	// 		.then((res) => setTransactions(res.data.transactions))
	// 		.catch((err) => console.log(err));
	// }, []);

	const income = transactions
		.filter((transaction) => transaction.type === "income")
		.reduce((acc, transaction) => acc + transaction.amount, 0);

	const expense = transactions
		.filter((transaction) => transaction.type === "expense")
		.reduce((acc, transaction) => acc + transaction.amount, 0);

	return (
		<Layout>
			<h3 className="mt-3 text-center">Resumen</h3>
			<TotalesResumen totalIngreso={income} totalGasto={expense} />

			{transactions.map((tran) => (
				<TransactionItem key={tran._id} data={tran} />
			))}
		</Layout>
	);
};

export async function getServerSideProps(context) {
	await connectDb();
	let transactionsData = [];
	try {
		transactionsData = await Transaction.find().sort({ date: -1 });
		console.log(transactionsData);
	} catch (error) {
		console.log(error);
	}

	transactionsData = JSON.stringify(transactionsData);

	transactionsData = JSON.parse(transactionsData);

	return {
		props: {
			transactionsData,
		},
	};
}
export default Summary;
