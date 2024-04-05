import {Hono} from 'hono';
import {serve} from '@hono/node-server';
import ships from "@db/ships.json";
import {getClaps} from "@/api/claps-store";

const app = new Hono()

app.get('/api/inYard', (context) => {
    return context.json(ships.inYard)
})

app.get('/api/catalogue', (context) => {
    return context.json(ships.catalogue)
})

app.get('/api/claps', async (context) => {
    return context.json(await getClaps())
})

console.log("Listening on http://localhost:8080")

serve({fetch: app.fetch, port: 8080})
