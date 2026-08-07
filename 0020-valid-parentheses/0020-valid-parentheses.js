/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let top=-1;
    for(let i=0;i<s.length;i++){
        if(stack[top]=="("&&s[i]==")"||
        stack[top]=="["&&s[i]=="]"||
        stack[top]=="{"&&s[i]=="}"){
            stack.pop();
            top--;
            continue;
        }
        top++;
        stack.push(s[i]);
    }
    return stack.length==0?true:false;
};