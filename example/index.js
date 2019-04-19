const braspag = require('./braspag')

console.log('-'.repeat(50))
console.log(`URL Auth: ${braspag.api.auth.baseURL}`)
console.log(`URL Ecommerce: ${braspag.api.ecommerce.baseURL}`)
console.log(`URL Query: ${braspag.api.query.baseURL}`)
console.log(`URL Split: ${braspag.api.split.baseURL}`)
console.log('-'.repeat(50))
