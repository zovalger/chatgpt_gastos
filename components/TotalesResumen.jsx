import Link from "next/link";

export default function TotalesResumen({ totalIngreso, totalGasto }) {
	return (
		<div className="row text-center">
			<div className="col-6">
				<div>
					<b>Ingresos</b>
				</div>
				<div className="text-success">${totalIngreso}</div>
			</div>
			<div className="col-6">
				<div>
					<b>Gastos</b>
				</div>
				<div className="text-danger">${totalGasto}</div>
			</div>

			<div className="col-12 my-2">
				<Link
					className="btn btn-primary  w-100 h-100 d-inline-flex align-items-center justify-content-center "
					href="/new-transaction"
				>
					+
				</Link>
			</div>
		</div>
	);
}
