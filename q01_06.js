const process = require('process')

let num = 123.456
let digit = 2

try {
  if (process.argv.length >= 3) {
    num = parseFloat(process.argv[2])
    if (isNaN(num)) {
      throw Error('第1引数にはFloatの値を入力してください')
    }
  }
  if (process.argv.length >= 4) {
    digit = parseInt(process.argv[3])
    if (isNaN(digit)) {
      throw Error('第2引数にはの値を入力してください')
    }
  }

  console.log(`${num}の小数点${digit}以下を四捨五入`)

  const multi = Math.pow(10, digit)
  console.log(`${Math.round(num * multi) / multi}`)
} catch (e) {
  console.log(e.message)
}
