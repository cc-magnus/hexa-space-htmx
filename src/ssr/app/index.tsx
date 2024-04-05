import {FC} from "hono/jsx";
import {Layout} from './layout';

export const IndexPage: FC = () => {
  return (
    <Layout>
      <main className="main">
        <h1>Welcome to Hexa Space Inc.</h1>
        <p>Browse our our collection of fine <a href="/src/ssr/app/shipsPage">space ships</a></p>
      </main>
    </Layout>
  )
}
