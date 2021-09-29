export function brackets(expression) {
    let stack = [];
    let current;
    const matchLookup = {
          "(": ")", 
          "[": "]", 
          "{": "}", 
        };
                      
    for (let i = 0; i < expression.length; i++) {
      current = expression[i];
      
      if (current === '(' || current === '[' || current === "{") {
        stack.push(current);
        
      } else if (current === ')' || current === ']' || current === "}") {
        const lastBracket = stack.pop();
        
        if (matchLookup[lastBracket] !== current) { 
        
          return false;
        }
      }
    }
    
    return stack.length === 0; 
  }

export function symbols(expression) {
  let str=expression.replace(/[0-9]/g, '');

  str=str.replace(/[*-/+]/g, '');

  str=str.replace(/[\[\]' \(\)' \{\}']/g, '');

  if(str.length>0){
    return true;
  }
  return false
}