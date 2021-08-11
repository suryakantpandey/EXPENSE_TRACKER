import React from "react";
import "./expenseDate.css";

function expenseDate(props) {
	let month = props.date.toLocaleString("en-US", { month: "long" });
	month.toUpperCase();
	const day = props.date.toLocaleString("en-US", { day: "2-digit" });
	const year = props.date.getFullYear();
	return (
		<div className="expense-date">
			<div className="expense-date__day">{day}</div>
			<div className="expence-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
		</div>
	);
}
export default expenseDate;
