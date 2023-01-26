import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

function ExpenseChart() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API o a una base de datos para obtener los gastos
    // y actualizar el estado "expenses" con los datos obtenidos
    fetch('https://mi-api.com/gastos')
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  // Aquí puedes crear una función para procesar los gastos y agruparlos por categoría
  const processExpenses = expenses => {
    const categories = {};
    expenses.forEach(expense => {
      if (categories[expense.category]) {
        categories[expense.category] += expense.amount;
      } else {
        categories[expense.category] = expense.amount;
      }
    });
    return categories;
  };

  // Aquí utilizamos la función que acabamos de crear para procesar los gastos
  // y obtener un objeto con los gastos agrupados por categoría
  const expensesByCategory = processExpenses(expenses);

  // Creamos los datos y configuración para el gráfico
  const data = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        data: Object.values(expensesByCategory),
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
      }
    ]
  };

  const options = {
    legend: {
      position: 'bottom'
    }
  };

  return (
    <div>
      <h2>Gastos por Categoría</h2>
      <Pie data={data} options={options} />
    </div>
  );
}

export default ExpenseChart;
