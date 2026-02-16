import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from "./getData.js";

export async function addNewSighting(newSighting) {

    try {
        const sighting = await getData()
        sighting.push(newSighting)
        const pathToJson = path.join('data', 'data.json')
        await fs.writeFile(pathToJson, JSON.stringify(sighting, null, 2), 'utf8')

    } catch (error) {
        throw new Error(error)
    }
}