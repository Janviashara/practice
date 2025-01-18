//Validate Balanced Brackets
//Write a function isBalanced that checks if a string has balanced brackets (e.g., {}, [], ()).

let isBalanced = (equation) => {

    let brackets = "[]{}()<>"
    let stack = []
  
    for(let bracket of equation) {
      let bracketsIndex = brackets.indexOf(bracket)
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  }
  
 console.log(isBalanced('({<>})'))
  
 