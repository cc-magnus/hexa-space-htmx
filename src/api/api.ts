import {Hono} from 'hono';
import {serve} from '@hono/node-server';
import ships from "@db/ships.json";

const app = new Hono()

app.get('/api/inYard', (context)=>{
    return context.json(ships.inYard)
})

app.get('/api/catalogue', (context)=>{
    return context.json(ships.catalogue)
})

serve({fetch: app.fetch, port: 8080})
