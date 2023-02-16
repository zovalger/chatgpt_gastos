import Link from "next/link";

import styles from "./Transaction.module.scss";

export default function Transaction({ data }) {
	const { _id, category, description, amount, date, type } = data;
	return (
		<Link className={styles.container} href={`/edit-transaction?id=${_id}`}>
			<div className={styles.fecha}>{new Date(date).toLocaleString()} </div>

			<div className="row">
				<div className="col-4">{category}</div>

				<div className="col-5">{description}</div>

				<div className="col-3">
					<div className="row text-center">
						<div className={`${styles.income} col-6`}>
							{type === "income" ? amount : null}
						</div>
						<div className={`${styles.expense} col-6`}>{type === "expense" ? amount : null}</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
