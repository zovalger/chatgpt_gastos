import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

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
				type:transactionType,
			});
			router.push("/summary");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Amount:
				<input
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Description:
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Category:
				<input
					type="text"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>
			</label>
			<br />

			<select
				value={transactionType}
				onChange={(e) => setTransactionType(e.target.value)}
			>
				<option value="income">Ingreso</option>
				<option value="expense">Gasto</option>
			</select>

			<button type="submit">Create</button>
		</form>
	);
};

export default NewTransaction;
