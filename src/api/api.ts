import {Hono} from 'hono';
import {serve} from '@hono/node-server';

const app = new Hono()

app.get('/test', (context)=>{
    return context.text('Hello World')
})

serve({fetch: app.fetch, port: 8080})
