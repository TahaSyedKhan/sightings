import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'


const __dirname = import.meta.dirname

const server = http.createServer( async (req, res) => {
    await serveStatic(__dirname, req, res)
})
const port = 8000

server.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})