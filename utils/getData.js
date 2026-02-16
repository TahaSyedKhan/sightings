import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData() {

try {
    const pathToJson = path.join('data', 'data.json')
    const content = await fs.readFile(pathToJson, 'utf8')
    const parsedContent = JSON.parse(content)
    return parsedContent
} catch (error) {
    return []
}
}