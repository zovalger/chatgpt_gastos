import Link from "next/link";

import styles from "./Transaction.module.scss";

export default function TransactionItem({ data }) {
	const { _id, category, description, amount, date, type } = data;
	return (
		<Link className={styles.container} href={`/edit-transaction?id=${_id}`}>
			<div className={styles.fecha}>{new Date(date).toLocaleString()} </div>

			<div className="row">
				<div className="col-4">{category}</div>

				<div className="col-5">{description}</div>

				<div
					className={`col-3 text-center ${
						type === "income" ? "text-danger" : "text-success"
					}`}
				>
					{amount}
				</div>
			</div>
		</Link>
	);
}
