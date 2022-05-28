function longestWord(str) {
  var newStr = str.trim().split(" ");
  var longestWord = 0;
  var word;
  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i].length > longestWord) {
      longestWord = newStr[i].length;
      word = newStr[i];
    }

    return word;
  }
}

console.log(longestWord("Welcome to India"));

let z = "Hello World Prabhakar";

let longestWord1 = z.split(" ").reduce((acc, current) => {
  console.log(current);

  if (current.length > acc) {
    acc = current.length;
  }
  //   return acc=current;
  return acc;
}, 0);

console.log(longestWord1);
