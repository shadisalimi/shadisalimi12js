// ? Question-3: follow these steps:
// todo-1: Write a function that receives an array of numbers
// todo-2: In The function that you created in todo-1, you should create two functions.
// todo-3: the first function displays the first half of the array, and the second function displays the second half of the array..

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*=> output
   [ 1, 2, 3, 4, 5 ]
   [ 6, 7, 8, 9, 10 ]
 */

// !Answer:

function func1(arrNum) {

  function func2() {
    const mid = Math.floor(arrNum.length / 2);
      console.log(arrNum.slice(0,mid));
    function func3() {
           console.log(arrNum.slice(mid));
    }
    func3()
  }
  func2()
  }
  const number = [1,3,5,7,9,11,13,15,17,19]
  func1(number)
  
  
