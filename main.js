const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) === 50;
console.log("isSum50:", isSum50);

// Check two: at least two odd numbers
const oddCount = [n1, n2, n3, n4].filter(num => num % 2 !== 0).length;
const isTwoOdd = oddCount >= 2; 
console.log("isTwoOdd:", isTwoOdd);

// Check three: no number larger than 25
const isOver25 = Math.max(n1, n2, n3, n4) > 25;
console.log("isOver25:", isOver25);

// Check four: all unique numbers
const isUnique = new Set([n1, n2, n3, n4]).size === 4;

const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Log results
console.log("isValid:", isValid);
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`);
console.log(`Check one: The sum of the numbers is 50: ${isSum50}`);
console.log(`Check two: At least two numbers are odd: ${isTwoOdd}`);
console.log(`Check three: No number is larger than 25: ${!isOver25}`);
console.log(`Check four: All numbers are unique: ${isUnique}`);

const tripDistance = 1500;
const speed55Mph = 55;
const speed60Mph = 60;
const speed75Mph = 75;
const fuelBudget = 175;
const priceOfFuel = 3; // Price of fuel per gallon

// Calculating fuel requirements and costs for various speeds 
const gallonsNeededAt55 = Math.ceil(tripDistance / speed55Mph);
const gallonsNeededAt60 = Math.ceil(tripDistance / speed60Mph);
const gallonsNeededAt75 = Math.ceil(tripDistance / speed75Mph);

// Calculating fuel costs for different speeds
const totalFuelCostAt55 = gallonsNeededAt55 * priceOfFuel;
const totalFuelCostAt60 = gallonsNeededAt60 * priceOfFuel;
const totalFuelCostAt75 = gallonsNeededAt75 * priceOfFuel;

// Determining if we can afford the trip within the budget
const canAffordAt55 = fuelBudget >= totalFuelCostAt55 ? "can" : "can't";
const canAffordAt60 = fuelBudget >= totalFuelCostAt60 ? "can" : "can't";
const canAffordAt75 = fuelBudget >= totalFuelCostAt75 ? "can" : "can't";

// Outputting the trip details for each speed scenario
console.log(`Planning a trip of ${tripDistance} miles. 
Driving at 55 mph will take ${Math.ceil(tripDistance / speed55Mph)} hours. 
We'll need ${gallonsNeededAt55} gallons of fuel. 
Total cost: $${totalFuelCostAt55}. You ${canAffordAt55} afford the trip.`);

console.log(`At 60 mph, it will take ${Math.ceil(tripDistance / speed60Mph)} hours. 
You'll need ${gallonsNeededAt60} gallons of fuel. 
Total cost: $${totalFuelCostAt60}. You ${canAffordAt60} afford the trip.`);

console.log(`If driving at 75 mph, it will take ${Math.ceil(tripDistance / speed75Mph)} hours. 
Fuel needed: ${gallonsNeededAt75} gallons. 
Fuel cost: $${totalFuelCostAt75}. You ${canAffordAt75} afford the trip.`);

// Here's an example of how this COULD be done,
// but it SHOULD NOT be done this way. 
const dontDoThis = ((n1 + n2 + n3 + n4) === 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 !== n2 && n1 !== n3 && n1 !== n4 && n2 !== n3 && n2 !== n4 && n3 !== n4);
