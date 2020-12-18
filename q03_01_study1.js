const suffixes = { 1: 'st', 2: 'nd', 3: 'rd' }

for (let i = 1; i <= 30; i++) {
  const n = i % 10
  console.log(`${i}:${suffixes[n]}`)
}
