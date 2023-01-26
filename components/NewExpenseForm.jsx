import React, { useState } from 'react';

function NewExpenseForm() {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleChange = e => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí puede agregar código para enviar el gasto a la base de datos
    // y limpiar el formulario después de enviarlo
    console.log(expense);
    setExpense({
      description: '',
      amount: '',
      category: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Descripción:
        <input
          type="text"
          name="description"
          value={expense.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Monto:
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Categoría:
        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">Seleccione una categoría</option>
          <option value="alimentacion">Alimentación</option>
          <option value="transporte">Transporte</option>
          <option value="vivienda">Vivienda</option>
          <option value="entretenimiento">Entretenimiento</option>
        </select>
      </label>
      <br />
      <button type="submit">Agregar gasto</button>
    </form>
  );
}

export default NewExpenseForm;
