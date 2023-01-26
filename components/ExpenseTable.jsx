import React, { useState, useEffect } from "react";

// function ExpenseTable() {
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     // Aquí puedes hacer una llamada a una API o a una base de datos para obtener los gastos
//     // y actualizar el estado "expenses" con los datos obtenidos
//     // fetch('https://mi-api.com/gastos')
//     //   .then(res => res.json())
//     //   .then(data => setExpenses(data));
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Descripción</th>
//           <th>Monto</th>
//           <th>Categoría</th>
//           <th>Fecha</th>
//         </tr>
//       </thead>
//       <tbody>
//         {expenses.map(expense => (
//           <tr key={expense.id}>
//             <td>{expense.description}</td>
//             <td>{expense.amount}</td>
//             <td>{expense.category}</td>
//             <td>{expense.date}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// function ExpenseTable() {
// 	const [expenses, setExpenses] = useState([]);

// 	useEffect(() => {
// 		// Obtener los gastos existentes del localStorage
// 		const expensesFromStorage =
// 			JSON.parse(localStorage.getItem("expenses")) || [];

// 		// Actualizar el estado con los gastos existentes
// 		setExpenses(expensesFromStorage);
// 	}, []);

// 	return (
// 		<table>
// 			<thead>
// 				<tr>
// 					<th>Descripción</th>
// 					<th>Monto</th>
// 					<th>Categoría</th>
// 					<th>Fecha</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				{expenses.map((expense) => (
// 					<tr key={expense.id}>
// 						<td>{expense.description}</td>
// 						<td>{expense.amount}</td>
// 						<td>{expense.category}</td>
// 						{/* <td>{expense.date.toLocaleDateString()}</td> */}
// 						<td>{expense.date}</td>
// 					</tr>
// 				))}
// 			</tbody>
// 		</table>
// 	);
// }

const categories = [
	"Alimentación",
	"Transporte",
	"Vestimenta",
	"Entretenimiento",
	"Otros",
	"Educación",
	"Salud",
	"Servicios Públicos",
	"Vivienda",
];

function ExpenseTable() {
	const [expenses, setExpenses] = useState([]);
	const [editingId, setEditingId] = useState(null);
	const [expense, setExpense] = useState({});

	useEffect(() => {
		// Obtener los gastos existentes del localStorage
		const expensesFromStorage =
			JSON.parse(localStorage.getItem("expenses")) || [];

		// Actualizar el estado con los gastos existentes
		setExpenses(expensesFromStorage);
	}, []);

	const handleDelete = (id) => {
		// Obtener los gastos existentes del localStorage
		const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

		// Filtrar el gasto que se desea eliminar
		const newExpenses = expenses.filter((expense) => expense.id !== id);

		// Actualizar el localStorage con la nueva lista de gastos
		localStorage.setItem("expenses", JSON.stringify(newExpenses));

		// Actualizar el estado del componente con la nueva lista de gastos
		setExpenses(newExpenses);
	};

	const handleEdit = (id) => {
		setEditingId(id);
		setExpense(expenses.find((expense) => expense.id === id));
	};

	const handleSave = (id) => {
		// Obtener los gastos existentes del localStorage
		const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

		// Buscar el gasto a editar y actualizarlo
		const newExpenses = expenses.map((exp) => {
			if (exp.id === id) {
				return {
					id,
					...expense,
				};
			}
			return exp;
		});

		// Actualizar el localStorage con la nueva lista de gastos
		localStorage.setItem("expenses", JSON.stringify(newExpenses));

		// Actualizar el estado del componente con la nueva lista de gastos
		setExpenses(newExpenses);
		setEditingId(null);
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Descripción</th>
					<th>Monto</th>
					<th>Categoría</th>
					<th>Fecha</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{expenses.map((expense) => (
					<tr key={expense.id}>
						{editingId === expense.id ? (
							<>
								<td>
									<input
										type="text"
										value={expense.description}
										onChange={(e) =>
											setExpense({ ...expense, description: e.target.value })
										}
									/>
								</td>
								<td>
									<input
										type="text"
										value={expense.amount}
										onChange={(e) =>
											setExpense({ ...expense, amount: e.target.value })
										}
									/>
								</td>
								<td>
									<select
										value={expense.category}
										onChange={(e) =>
											setExpense({ ...expense, category: e.target.value })
										}
									>
										{categories.map((category) => (
											<option key={category} value={category}>
												{category}
											</option>
										))}
									</select>
								</td>
								<td>
									<input
										type="text"
										value={expense.date}
										onChange={(e) =>
											setExpense({ ...expense, date: e.target.value })
										}
									/>
								</td>
								<td>
									<button type="button" onClick={() => handleSave(expense.id)}>
										Save
									</button>
									<button type="button" onClick={() => setEditingId(null)}>
										Cancel
									</button>
								</td>
							</>
						) : (
							<>
								<td>{expense.description}</td>
								<td>{expense.amount}</td>
								<td>{expense.category}</td>
								<td>{expense.date}</td>
								<td>
									<button type="button" onClick={() => handleEdit(expense.id)}>
										Edit
									</button>
									<button
										type="button"
										onClick={() => handleDelete(expense.id)}
									>
										Delete
									</button>
								</td>
							</>
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
}

// export default ExpenseTable;

export default ExpenseTable;
