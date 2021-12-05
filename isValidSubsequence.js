//Validate Subsequence
//Given two arrays, write a function to determine if the second array is a subsequence of the first one.

//Sample Input: [5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]

function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrIdx = 0;
	let seqIdx = 0;
	while(arrIdx < array.length && seqIdx < sequence.length) {
		if(array[arrIdx] === sequence[seqIdx]) seqIdx++;
		arrIdx++;
	}
	return seqIdx == sequence.length;
	
}