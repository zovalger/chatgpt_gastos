import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import style from "../styles/Edit-tran.module.css";
import { Form } from "react-bootstrap";

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
			<Form className="mt-3" onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Select
						name="type"
						value={transaction.type}
						onChange={(event) =>
							setTransaction({ ...transaction, type: event.target.value })
						}
					>
						<option value="income">Ingreso</option>
						<option value="expense">Gasto</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label> Amount:</Form.Label>
					<Form.Control
						type="number"
						name="amount"
						value={transaction.amount}
						onChange={(event) =>
							setTransaction({ ...transaction, amount: event.target.value })
						}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label> Description:</Form.Label>
					<Form.Control
						type="text"
						name="description"
						value={transaction.description}
						onChange={(event) =>
							setTransaction({
								...transaction,
								description: event.target.value,
							})
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label> Category:</Form.Label>
					<Form.Control
						name="category"
						type="text"
						value={transaction.category}
						onChange={(event) =>
							setTransaction({ ...transaction, category: event.target.value })
						}
					/>
				</Form.Group>
				<div className="row">
					<div className="col-12 mb-3">
						<button type="submit" className="btn btn-primary w-100">
							Save
						</button>
					</div>
					<div className="col-6">
						<button
							onClick={deleteTransaction}
							className="btn btn-outline-danger w-100"
						>
							Eliminar
						</button>
					</div>
					<div className="col-6">
						<button
							onClick={() => router.push("/summary")}
							className="btn btn-outline-secondary w-100"
						>
							Cancelar
						</button>
					</div>
				</div>
			</Form>
		</Layout>
	);
};

export default EditTransactionPage;
