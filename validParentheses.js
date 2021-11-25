// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
let hashmap = {
  ")" : "(",
  "]" : "[",
  "}" : "{"
}

var isValid = function(s) {
  
let stack = [];

if(s.length <=  1){
    return false;
}
  
for(let i = 0; i < s.length; i++){
  
  if(s[i] === "(" || s[i] === "[" || s[i] === "{" ){
      stack.push(s[i]);
  } 
  if(hashmap[s[i]] === stack[stack.length - 1]){
      stack.pop();
  }    
}
return stack.length ?  false : true;
}