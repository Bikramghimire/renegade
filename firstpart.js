function firstNonRepeatingCharacter(str) {
  let arr = str.split("");
  let counter = [];
  let repeatCounter = [];
  for (let i = 0; i < arr.length; i++) {
    counter.push(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] === arr[j]) {
          counter.pop();
          repeatCounter.push(arr[i]);
        }
      }
    }
  }
  // console.log(counter);
  // console.log(repeatCounter);
  if (repeatCounter.length === 0) {
    return -1;
  } else {
    const index = arr.indexOf(counter[0]);
    return `the first nonrepeating character is ${counter[0]} and it is found at ${index}`;
  }
}
const valueIS = firstNonRepeatingCharacter("abcdcaf");
console.log(valueIS);
