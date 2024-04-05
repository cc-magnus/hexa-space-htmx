import {Hono} from 'hono';
import {serve} from '@hono/node-server';
import {IndexPage} from "@/ssr/app";
import { serveStatic } from "@hono/node-server/serve-static"

const app = new Hono()

app.get('/', (context) => {
  return context.html(<IndexPage/>)
})

app.use('/public/*', serveStatic({ root: './' }))

console.log("Listening on http://localhost:3000")

serve({fetch: app.fetch, port: 3000})
