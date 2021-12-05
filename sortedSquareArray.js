//Write  a function that takes in an array of integers and returns an array of the sorted squares of each number in ascending order.

// Examples:
//array=[1, 2, 3, 5, 6, 8, 9]
//output=[1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(array) {
  // Write your code here.
	let squared = array.map(x => Math.pow(x,2))
  return squared.sort((a, b) => (a - b));;
}
