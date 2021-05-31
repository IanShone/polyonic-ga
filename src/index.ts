export class Analytics {
  Greeter(name: string) {
    console.log(`Analytics says: Hello ${name}`)
    return `Hello ${name}`
  }
}

module.exports = { Analytics }