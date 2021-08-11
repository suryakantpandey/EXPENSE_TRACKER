import React from "react";
import ExpenseItem from "./expenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	if (props.item.length === 0)
		return <h2 className="expenses-list__fallback">Found no expenses</h2>;
	if (props.item.length > 0)
		return (
			<ul className="expenses-list">
				{props.item.map((Item) => (
					<div>
						<ExpenseItem
							key={Item.id}
							title={Item.title}
							amount={Item.amount}
							date={Item.date}
						/>
					</div>
				))}
			</ul>
		);
};
export default ExpensesList;
