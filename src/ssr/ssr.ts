import {Hono} from 'hono';
import {serve} from '@hono/node-server';

const app = new Hono()

app.get('/', (context) => {
  return context.text("Index")
})

console.log("Listening on http://localhost:3000")

serve({fetch: app.fetch, port: 3000})
