/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  let unique_array = data.filter(function(elem, index, self){
    return index == self.indexOf(elem);
  })
  return unique_array
}

console.log(result(data));
