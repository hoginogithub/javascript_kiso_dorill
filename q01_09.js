const displayDate = function (dt) {
  const y = dt.getFullYear()
  const m = dt.getMonth() + 1
  const d = dt.getDate()
  console.log(`${y}年${m}月${d}日`)
}

const weeks = 5
const dt = new Date()
displayDate(dt)

let d = dt.getDate()
d += weeks * 7
if (dt.getHours() >= 1) {
  d += 1
}
dt.setDate(d)
displayDate(dt)
