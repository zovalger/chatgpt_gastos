import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../components/Layout";
import style from "../styles/New-tran.module.css"

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
	
		<Layout>
		<form className={style.container} onSubmit={handleSubmit}>
			<label className={style.form_label}>
				Amount:
				<input
				className={style.form_input}
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
			</label>
			<br />
			<label className={style.form_label}>
				Description:
				<input
				className={style.form_input}
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</label>
			<br />
			<label className={style.form_label}>
				Category:
				<input
				className={style.form_input}
					type="text"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>
			</label>
			<br />

			<select
			className={style.form_select}
				value={transactionType}
				onChange={(e) => setTransactionType(e.target.value)}
			>
				<option value="income">Ingreso</option>
				<option value="expense">Gasto</option>
			</select>

			<button type="submit" className={style.form_button}>Create</button>
		</form>
		</Layout>
	
	);
};

export default NewTransaction;
