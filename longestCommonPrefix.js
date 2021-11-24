//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

 

//Example 1:

//Input: strs = ["flower","flow","flight"]
//Output: "fl"
//Example 2:

//Input: strs = ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.
 

//Constraints:

//1 <= strs.length <= 200
//0 <= strs[i].length <= 200
//strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function(strs) {  
  let prefix = "";
  //immediately return if array is empty
  if(strs === null || strs.length === 0) return prefix;
  
  for (let i=0; i < strs[0].length; i++){ 
      // loop through all characters of the very first string. 
      const char = strs[0][i];
     
      for (let j = 1; j < strs.length; j++){ 
          //console.log("strs.length", strs.length);
          // loop through all other strings in the array
          //console.log("[j][i]", strs[j][i])

          if(strs[j][i] !== char) return prefix
      }
      prefix = prefix + char
  }

  return prefix
}