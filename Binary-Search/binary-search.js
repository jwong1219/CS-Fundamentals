function binarySearch(stuff, searchElement) {

  //set some starting values.
  var currentElement;
  var currentIndex;
  var maxIndex = stuff.lenth - 1;
  var minIndex = 0;

  //this is the main loop.
  while (minIndex <= maxIndex) {

    //get a position near the middle.
    currentIndex = Math.floor((minIndex + maxIndex) / 2);

    //get that element.
    currentElement = stuff[currentIndex];
    console.log(`Start Index: ${minIndex}`)
    console.log(`End Index: ${maxIndex}`)
    console.log(`Current Element: ${stuff[currentIndex]}`)

    //test it
    if (currentElement < searchElement) {
      //if it's less than we are looking for, look *above* this value.
      minIndex = currentIndex + 1;
    }
    else if (currentElement > searchElement) {
      //if it's more than we are looking for, look *below* this value.
      maxIndex = currentIndex - 1;
    }
    else {
      //we found it; return the index.
      console.log(`Current Index: ${currentIndex}`)
      console.log(`Current Element: ${stuff[currentIndex]}`)
      return currentIndex;
    }
  }
  //if we are out here, it means that we didn't find the element in the array
  return false;
}

const find = (num, arr, start, stop) => {
  //measure the number to find against the number at the halfway point between start and stop
  let half = Math.floor((start + stop)/2);
  //if start is ever greater than stop, it means that the number does not exist in the array
  if(start > stop) {
    return console.log(`the number ${num} is not in this array`)
  }
  //if the number is equal, return this index
  if(num === arr[half]) {
    return console.log(`index: ${half}`)
  }
  //if the number is less, repeat, but set the stoping index as the current index - 1
  else if(num < arr[half]) {
    find(num, arr, start, (half-1))
  }
  //if the number is more, repeat, but set the starting index as the current index + 1
  else {
    find(num, arr, (half+1), stop)
  }
}