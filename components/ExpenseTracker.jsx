import React from 'react';
import NewExpenseForm from './NewExpenseForm'; // importar el componente del formulario
import ExpenseTable from './ExpenseTable'; // importar el componente de la tabla de gastos
import ExpenseChart from './ExpenseChart'; // importar el componente del gráfico de gastos
import AddExpense from './AddExpense';

function ExpenseTracker() {

  
  return (
    <div>
      <h1>Registro de Gastos</h1>

      <AddExpense/>
      {/* <NewExpenseForm /> */}
      <ExpenseTable />
      {/* <ExpenseChart /> */}
    </div>
  );
}

export default ExpenseTracker;
