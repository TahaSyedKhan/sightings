import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'

export async function serveStatic(dirname, req, res) {
    try {
        const publicDir = path.join(dirname, 'public')
        const pathToResource = path.join(publicDir, 'index.html')
        const content = await fs.readFile(pathToResource)
        sendResponse(res, 200, 'text/html', content)
        
    } catch (error) {
        console.log(error)
    }
}