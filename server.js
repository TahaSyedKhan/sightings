import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { getData } from './utils/getData.js'
import { handleGet, handlePost } from './handlers/routeHandlers.js'


const __dirname = import.meta.dirname

const server = http.createServer( async (req, res) => {
    if(req.url === '/api') {
        if(req.method === 'GET') {
            return await handleGet(res)
        } else if(req.method === 'POST') {
            await handlePost(req, res)
        }
    } else if(!req.url.startsWith('/api')) {
        return await serveStatic(__dirname, req, res) 
    }
})
const port = 8000

server.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})