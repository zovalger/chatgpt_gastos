import React, { useState } from 'react';

const CATEGORIES = [
  'Alimentación', 
  'Transporte', 
  'Vestimenta', 
  'Entretenimiento', 
  'Otros',
  'Educación',
  'Salud',
  'Servicios Públicos',
  'Vivienda'
];


function AddExpense({ onExpenseAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleSubmit = event => {
    event.preventDefault();

    // Obtener los gastos existentes del localStorage
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Crear un nuevo gasto
    const expense = {
      id: Date.now(),
      description,
      amount,
      category,
      date: new Date()
    };

    // Agregar el nuevo gasto a la lista de gastos existentes
    expenses.push(expense);

    // Actualizar el localStorage con la nueva lista de gastos
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Limpiar los campos del formulario
    setDescription('');
    setAmount('');
    setCategory(CATEGORIES[0]);

    // Ejecutar una función externa para notificar que se agregó un nuevo gasto
    if (onExpenseAdded) {
      onExpenseAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />
      <select value={category} onChange={event => setCategory(event.target.value)}>
        {CATEGORIES.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Agregar Gasto</button>
    </form>
  );
}

export default AddExpense;
