/*Expect Testing
Write a function 'expect'
 that helps developers test their code. It should take in any value 'v'al and 
 return
  an object with the following two functions.

toBe(val) accepts another value and returns true 
if the two values === each other.

If they are not equal, it should 
throw
 an error "Not Equal".


notToBe(val) accepts another value and returns true if the two values !== each other. 

If they are equal, 
it should throw
 an error
  "Equal".*/
  let value = "5";
  let otherVal = "5";
  
  function expect(value) {
    return {
      toBe: function(otherVal) {
        if (value === otherVal) {
          return true;
        } else {
          throw new Error("Not Equal");
        }
      },
      notToBe: function(otherVal) {
        if (value !== otherVal) {
          return true;
        } else {
          throw new Error("Equal");
        }
      }
    };
  }
  
  const result = expect(value).toBe(otherVal);
  console.log(result);

