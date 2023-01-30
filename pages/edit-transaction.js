import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

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
		<form onSubmit={handleSubmit}>
			<label>
				Monto:
				<input
					type="number"
					name="amount"
					value={transaction.amount}
					onChange={(event) =>
						setTransaction({ ...transaction, amount: event.target.value })
					}
				/>
			</label>
			<label>
				Descripción:
				<input
					type="text"
					name="description"
					value={transaction.description}
					onChange={(event) =>
						setTransaction({ ...transaction, description: event.target.value })
					}
				/>
			</label>
			<label>
				Categoria:
				<input
					name="category"
					type="text"
					value={transaction.category}
					onChange={(event) =>
						setTransaction({ ...transaction, category: event.target.value })
					}
				/>
			</label>

			<label>
				Tipo:
				<select
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

			<button type="submit">Guardar</button>

			<button onClick={() => router.push("/summary")}>Cancelar</button>

			<button onClick={deleteTransaction}>Eliminar</button>
		</form>
	);
};

export default EditTransactionPage;
