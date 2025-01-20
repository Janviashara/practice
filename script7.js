//Validate Balanced Brackets
//Write a function isBalanced that checks if a string has balanced brackets (e.g., {}, [], ()).


function isBalanced(equation) {
  let output = [];
  let Brackets = {
    "{": "}",
    ")": "(",
    "]": "[",
  };

  for (let char of equation) {
    if (char === "(" || char === "{" || char === "[") {
      output.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (output.length === 0 || output[output.length - 1] !== Brackets[char]) {
        return false;
      }
      output.pop();
    }
  }
  return output.length === 0;
}
console.log(isBalanced("(a+b) * [c-d]"));