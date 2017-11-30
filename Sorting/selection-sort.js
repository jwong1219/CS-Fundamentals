//test case
const arraySize = 40;

let array = [];
for (let index = 0; index < arraySize; index++) {
  const randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

//end test case

const swap = (items, firstIndex, secondIndex) => {
  let temp = items[firstIndex];
  // set the item in the first index to the item in the second index
  items[firstIndex] = items[secondIndex];
  // set the item in the second index to what was previously the item in the first index
  items[secondIndex] = temp;
}

const selectionSort = (items) => {
  // grab the length of the array so the loops know when to stop
  const len = items.length;
  // initliaze the min variable for the loops to use
  let min;

  // look at each item in the array, starting with the first
  for (let i=0; i<len; i++) {
    // assume for now that the current index contains the smallest number of all the numbers that come after it
    min = i;

    // look at each item in the array, starting with the index immediately after "i"
    for (let j=i+1; j<len; j++) {
      // if this number is smaller than the one that we currently think is the minimum, this index is the new minimum
      if (items[j] < items[min]) {
        min = j;
      }
    }

    // if the item at index "i" is not still the minimum, swap it with the item at index "min"
    if (i !== min) {
      swap(items, i , min);
    }
  }

  return items;
}

// to run the test
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));