

//Multiply 2 nums

function multiply(a, b){
    return a * b
}

//Capitalize first letter of each word

String.prototype.toJadenCase = function () {
    const strSplit = this.split(' ')
    return strSplit.map( word => word[0].toUpperCase() + word.substr(1)).join(' ')
}

//Find the highest and lowest number in a string of numbers
function highAndLow(numbers){
    const nums = numbers.split(' ');
    const high = Math.max.apply(null, nums);
    const low = Math.min.apply(null, nums);
    return high + ' ' + low;
  }