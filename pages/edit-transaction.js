import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import style from "../styles/Edit-tran.module.css"

const EditTransactionPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const transactionId = id;

	const [transaction, setTransaction] = useState({});

	useEffect(() => {
		const fetchTransaction = async () => {
			try {
				const response = await axios.get(`/api/transactions`, {
					params: { id: transactionId },
				});
				setTransaction(response.data.transactions);
			} catch (error) {
				console.log(error);
			}
		};
		fetchTransaction();
	}, [transactionId]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.put(`/api/transactions`, transaction, {
				params: { id: transactionId },
			});
			router.push("/summary");
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTransaction = async () => {
		try {
			await axios.delete(`/api/transactions`, {
				params: { id: transactionId },
			});
			router.push("/summary");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout>
		<form onSubmit={handleSubmit} className={style.form_container}>
			<label className={style.form_label}>
				Monto:
				<input
				className={style.form_input}
					type="number"
					name="amount"
					value={transaction.amount}
					onChange={(event) =>
						setTransaction({ ...transaction, amount: event.target.value })
					}
				/>
			</label>
			<label className={style.form_label}>
				Descripción:
				<input
						className={style.form_input}
					type="text"
					name="description"
					value={transaction.description}
					onChange={(event) =>
						setTransaction({ ...transaction, description: event.target.value })
					}
				/>
			</label>
			<label className={style.form_label}>
				Categoria:
				<input
						className={style.form_input}
					name="category"
					type="text"
					value={transaction.category}
					onChange={(event) =>
						setTransaction({ ...transaction, category: event.target.value })
					}
				/>
			</label>

			<label className={style.form_label}>
				Tipo:
				<select
						className={style.form_select}
					name="type"
					value={transaction.type}
					onChange={(event) =>
						setTransaction({ ...transaction, type: event.target.value })
					}
				>
					<option value="income">Ingreso</option>
					<option value="expense">Gasto</option>
				</select>
			</label>

			<button className={style.form_button} type="submit">Guardar</button>

			<button onClick={() => router.push("/summary") } className={style.form_button}>Cancelar</button>

			<button onClick={deleteTransaction} className={style.form_button}>Eliminar</button>
		</form>
		</Layout>
	);
};

export default EditTransactionPage;
