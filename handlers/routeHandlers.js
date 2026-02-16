import { sightingEvents } from "../events/sightingEvents.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { getSanitizedData } from "../utils/getSanitizedData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}


export async function handlePost(req, res) {

    try {
        const parsedBody = await parseJSONBody(req)
        const sanitizedData = getSanitizedData(parsedBody)
        await addNewSighting(sanitizedData)
        sightingEvents.emit('sighting-added', sanitizedData)
        sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedData))
    } catch (err) {
        sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
    }
}