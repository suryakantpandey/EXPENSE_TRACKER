import React, { useState } from "react";

import ExpensesFilter from "../NewExpense/ExpenseFilter";
import "./expenses.css";
import Card from "../Card/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseList from "../Expense/ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Title from "../Title/Title";
const Dummy_expense = [];
function Expenses() {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const [expenses, setExpenses] = useState(Dummy_expense);
	const addExpensehandler = (expense) => {
		setExpenses((prevExpense) => {
			return [expense, ...prevExpense];
		});
	};
	const FilterExpenses = expenses.filter((exp) => {
		return exp.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<Title />
				<NewExpense onAddExpense={addExpensehandler} />
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={FilterExpenses} />
				<ExpenseList item={FilterExpenses} />
			</Card>
		</div>
	);
}
export default Expenses;
