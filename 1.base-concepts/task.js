"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {

  }else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d == 0) {
		let x1 = -b / (2 * a);
		arr.push(x1);
	}
	console.log(arr);
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}
	percent = percent / 100 / 12;

	let loanBody = amount - contribution;
	let payment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
	let totalPayment = payment * countMonths;

	totalPayment = Number(totalPayment.toFixed(2));

	return totalPayment;

}