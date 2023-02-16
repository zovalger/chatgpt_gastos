

export default function GroupTransaction({ totalIngreso, totalGasto, }) {
	return (
    <div className="row text-center">
    <div className="col-6">
      <div>Ingresos</div>
      <div>${totalIngreso}</div>
    </div>
    <div className="col-6">
      <div>Gastos</div>
      <div>${totalGasto}</div>
    </div>
  </div>
	);
}
