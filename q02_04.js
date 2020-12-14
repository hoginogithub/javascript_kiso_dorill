const resultList = Array(0)
try {
  let n
  if (process.argv.length === 2) {
    n = 100
  } else if (process.argv.length === 3) {
    n = parseInt(process.argv[2])
    if (!Number.isFinite(n)) throw new Error('引数には数字を入力してください')
    if (n <= 1) throw new Error('引数には2以上の整数を入力してください')
  } else {
    throw new Error('引数が多すぎます')
  }

  console.log(`2から${n}までの数で、素数である数を表示`)

  for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) continue
    resultList.push(i)
  }
} catch (e) {
  console.log(e.message)
}

console.log(resultList)

function isPrime (n) {
  if (n <= 3) {
    return n > 1
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false
  }
  let i = 5
  while (i ** 2 <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false
    }
    i += 6
  }
  return true
}
