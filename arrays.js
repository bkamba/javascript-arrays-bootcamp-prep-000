var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, ele){
  var arr = [ele, ...array]
  return arr
} 


function destructivelyAddElementToBeginningOfArray(array, ele)
{
  array.unshift(ele);
  return array;
  
}

function addElementToEndOfArray(array, ele) {

}

function destructivelyAddElementToEndOfArray(array, ele) {
  
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var lessChocalate = array.slice(0)
  return lessChocalate;
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.slice(array.length - 1)
  return array
}

function removeElementFromEndOfArray(array) {
  var less = array.slice(array.length - 1)
  return less
}






