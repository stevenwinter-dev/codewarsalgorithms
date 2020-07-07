//Methods used:
    // split - The split() method divides a String into an ordered set of substrings, puts these substrings into an array, and returns the array.
      //Also used to replace chars/words when input as an argument

//Multiply 2 nums
function multiply(a, b){
    return a * b
}

//Capitalize first letter of each word
String.prototype.toJadenCase = function () {
    const strSplit = this.split(' ')
    return strSplit.map( word => word[0].toUpperCase() + word.substr(1)).join(' ')
}
    //Input:
    // var str = "How can mirrors be real if our eyes aren't real";
    // Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

//Find the highest and lowest number in a string of numbers
function highAndLow(numbers){
    const nums = numbers.split(' ');
    const high = Math.max.apply(null, nums);
    const low = Math.min.apply(null, nums);
    return high + ' ' + low;
}
    //Input:
    // highAndLow("1 2 3 4 5");  // return "5 1"
    // highAndLow("1 2 -3 4 5"); // return "5 -3"
    // highAndLow("1 9 3 4 -5"); // return "9 -5"

//Take an array of names. Create sentences with names based on how many are input.
function likes(names) {
  if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`;  
  } else if (names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`; 
  } else if (names.length > 3) {
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
  } else {
      return 'no one likes this';
  }
}

    //Input:
    // likes [] // must be "no one likes this"
    // likes ["Peter"] // must be "Peter likes this"
    // likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
    // likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
    // likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

//Take a string with multiple words and 'WUB's. Replace the 'Wub's with a space; however, multiple 'Wub's in a row should only have 1 space total.
function songDecoder(song){
  return song.replace(/(WUB)+/g, " ").trim();
}
    //Input:
    // songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")