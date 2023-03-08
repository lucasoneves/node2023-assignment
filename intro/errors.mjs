import { readFile } from 'fs/promises'

const result = await readFile(new URL('data.json', import.meta.url), 'utf-8')
const parsedResult = JSON.parse(result)
const person = parsedResult[0].person
// console.log('hello', JSON.parse(result))
console.log('person', person.name)