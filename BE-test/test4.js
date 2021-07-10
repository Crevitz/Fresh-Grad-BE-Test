/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  const total = 10
  const missing = new Array();

  for(const i=0; i <= total; i++){
    if(numbers.indexOf(i)==-1){
      missing.push(i)
    }
  }
  console.log(missing);
}

console.log(result(numbers));
