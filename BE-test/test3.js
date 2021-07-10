/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  const removeEmpty = (data) => {
    let newObj = {};
  Object.keys(data).forEach((key) => {
    if (data[key] === Object(data[key])) newObj[key] = removeEmpty(data[key]);
    else if (data[key] !== undefined) newObj[key] = data[key];
  });
  return newObj;
  }
}

console.log(result(data));
