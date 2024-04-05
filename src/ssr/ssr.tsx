import {Hono} from 'hono';
import {serve} from '@hono/node-server';
import {IndexPage} from "@/ssr/app";
import {serveStatic} from "@hono/node-server/serve-static"
import {ShipsPage} from './app/shipsPage';
import {getSpaceShips} from '../bounded_contexts/space-ship-store-front/api-adapter/getSpaceShips';
import {getClaps} from '../bounded_contexts/space-ship-store-front/api-adapter/getClaps';
import {attachClapsToShips} from '../bounded_contexts/space-ship-store-front/clap-adapter/attachClapsToShips';

const app = new Hono()

app.get('/', (context) => {
    return context.html(<IndexPage/>)
})


app.get('/ships', async (context) => {
    const ships = await getSpaceShips();
    const claps = await getClaps();
    const shipsWithClaps = attachClapsToShips({claps, ships});
    return context.html(<ShipsPage shipsWithClaps={shipsWithClaps}/>)
})

app.use('/public/*', serveStatic({root: './'}))

console.log("Listening on http://localhost:3000")

serve({fetch: app.fetch, port: 3000})
