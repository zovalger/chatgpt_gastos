import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import style from "../styles/New-tran.module.css";

const NewTransaction = () => {
	const [amount, setAmount] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [transactionType, setTransactionType] = useState("income");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/transactions", {
				amount,
				description,
				category,
				type: transactionType,
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
						value={transactionType}
						onChange={(e) => setTransactionType(e.target.value)}
					>
						<option value="income">Ingreso</option>
						<option value="expense">Gasto</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label> Amount:</Form.Label>
					<Form.Control
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label> Description:</Form.Label>
					<Form.Control
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label> Category:</Form.Label>
					<Form.Control
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</Form.Group>

				<button type="submit" className="btn btn-primary w-100">
					Create
				</button>
			</Form>
		</Layout>
	);
};

export default NewTransaction;
