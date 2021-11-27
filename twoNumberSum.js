//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any tow numbers in the input array sum up to the target sum, the function should retrun them in an array in any order. If no towo numbers sum up to the target sum, the function should return an empty array.


function twoNumberSum(array, targetSum) {
  // Write your code here.
	for (let i = 0; i < array.length -1; i++){
		const first = array[i];
		for (let j = i + 1; j < array.length; j++){
			const second = (array[j]);
			if (first + second === targetSum){
				return [first, second]
			}		
				
		}
	}
	return [];
}


