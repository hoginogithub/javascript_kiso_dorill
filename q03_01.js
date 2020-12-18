toOrdinalString = function (num) {
  if (typeof(num) != "number") return
  const suffixes = {1: 'st', 2: 'nd', 3: 'rd'}
  const suffix = (num < 20) ? suffixes[num] : suffixes[num % 10]
  return num.toString().concat(suffix ? suffix : 'th')
}

console.log(toOrdinalString())
console.log(toOrdinalString(2))
console.log(toOrdinalString(11))
console.log(toOrdinalString(20))
console.log(toOrdinalString(21))
