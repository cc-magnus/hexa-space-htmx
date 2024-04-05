import {Hono} from 'hono';
import {serve} from '@hono/node-server';
import ships from "@db/ships.json";

const app = new Hono()

app.get('/inYard', (context)=>{
    return context.json(ships.inYard)
})

serve({fetch: app.fetch, port: 8080})
