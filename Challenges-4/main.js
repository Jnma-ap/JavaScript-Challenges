/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
    let hourInDay = 8;
    return ratePerHour * hourInDay;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
    let dayRates = ratePerHour * 8;
    let numDays = budget / dayRates;
    return Math.floor(numDays);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const months = Math.floor(numDays / 22);
    const remainingDays = numDays % 22;
    return Math.ceil(
        months * 22 * dayRate(ratePerHour) * (1 - discount) +
            remainingDays * dayRate(ratePerHour)
    );
}
