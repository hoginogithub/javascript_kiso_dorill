const isPalindrome = function (word) {
  if (typeof (word) !== 'string' || word === '')
    return

  const reverseWord = word.split('').reverse().join('')

  return word.toLowerCase === reverseWord.toLowerCase
}
console.log(isPalindrome())
console.log(isPalindrome(''))
console.log(isPalindrome('Madam'))
console.log(isPalindrome('Book'))
