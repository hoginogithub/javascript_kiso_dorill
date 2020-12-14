function getNumberDigit (num) {
  let n = 0
  do {
    num = Math.floor(num / 10)
    n += 1
  } while (!(num === 0))
  return n
}

const maxNumber = Number.MAX_SAFE_INTEGER
console.log(`Numberの最大値は${maxNumber}`)
const maxNumberDigit = getNumberDigit(maxNumber)
console.log(`${maxNumber}の桁数は${maxNumberDigit}です`)

const a = 10000000000000000
const b = 1
const c = a + b
console.log(`${c}`)

const d = 10000000000000000
const e = a + d
console.log(`${e}`)

const an = 10000000000000000n
const bn = 1n
const cn = an + bn
console.log(`Typeof: ${typeof cn} bigint:${cn}`)

const bigmaxNumber = BigInt(maxNumber)
const f = an + bigmaxNumber
console.log(`${an} + ${bigmaxNumber} = ${f}`)
