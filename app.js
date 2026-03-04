const name = process.argv[2]
const hours = new Date().getHours()

function greeting() {
    if (hours < 12) return "Good morning"
    if (hours < 4) return "Good evening"
    if (hours > 8) return "Good night"
}
const result = greeting(hours)
console.log(`${result},${name}`)