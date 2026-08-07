/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let stack=[];
  let top=-1;
  for(let i=0;i<s.length;i++){
    if(stack[top]==s[i]){
        stack.pop(stack[top]);
        top--;
        continue;
    }
    top++; 
    stack.push(s[i]);
  } 
  return stack.join(""); 
};