import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Summary = () => {
	const [transactions, setTransactions] = useState([]);

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
			<h1>Resumen de Ingresos y Gastos</h1>
			<div>
				<h2>Ingresos: ${income}</h2>
				<h2>Gastos: ${expense}</h2>
			</div>

			<div>
				<table>
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Categoria</th>
							<th>Descripcion</th>
							<th>valor</th>

							{/* <th>opciones</th> */}

							{/* <th>Ingreso</th>
							<th>Gasto</th> */}
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction) => (
							<tr key={transaction._id}>
								<td>{new Date(transaction.date).toLocaleString()} </td>
								<td>{transaction.category}</td>
								<td>{transaction.description}</td>
								<td>{transaction.amount}</td>

								<td>
									<Link
										// key={transaction._id}
										href={`/edit-transaction?id=${transaction._id}`}
									>
										<button>Editar</button>
									</Link>
								</td>
								{/* <td>{transaction.income}</td>
								<td>{transaction.expense}</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Link href="/new-transaction">
				<button>Agregar nueva transacción</button>
			</Link>
		</Layout>
	);
};

export default Summary;
