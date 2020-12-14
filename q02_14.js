function generateTruthTable (n) {
  const res = Array(0)
  allBinaries(n, new Array(n), res)
  return res
}

function allBinaries (i, arr, res) {
  if (i === 0) {
    return res.push(arr.join(''))
  }
  arr[i - 1] = 0
  allBinaries(i - 1, arr, res)
  arr[i - 1] = 1
  allBinaries(i - 1, arr, res)

  return res.sort()
}

console.log(generateTruthTable(3))
