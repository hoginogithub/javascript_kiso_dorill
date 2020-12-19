function sum (a, b) {
  return a + b
}

const sumNoName = (a, b) => a + b

console.log(`${sum(1, 2)}`)
console.log(`${sumNoName(3, 4)}`)

function fibo (n) {
  if (n < 2) {
    return n
  }
  return fibo(n - 1) + fibo(n - 2)
}

const fiboNoName = (n) => n < 2 ? n : fibo(n - 1) + fibo(n - 2)

function * fiboGenerator () {
  let x = 0
  let y = 1
  let tmp
  while (true) {
    yield x
    tmp = x
    x = y
    y = tmp + y
  }
}

const fiboGen = (n) => {
  const f = fiboGenerator()
  for (let i = 0; i <= n; i++) {
    if (i !== n) {
      f.next()
    } else {
      return f.next().value
    }
  }
}

const { performance } = require('perf_hooks')

function measurePerformance (fnc, n, msg) {
  console.log(msg)
  const start = performance.now()
  console.log(fnc(n))
  console.log(`${performance.now() - start}ミリ秒`)
}

measurePerformance(fibo, 40, '-再起呼び出し----------')
measurePerformance(fiboNoName, 40, '-再起呼び出し アロー演算子----------')
measurePerformance(fiboGen, 40, '-再起呼び出し ジェネレータ----------')