import {FC} from "hono/jsx";

export const IndexPage: FC = () => {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="/public/global.css"/>
      <link rel="stylesheet" href="/public/page.css"/>
      <title>HexSpace</title>
    </head>

    <body>
    <main className="main">
      <h1>Welcome to Hexa Space Inc.</h1>
          <p>Browse our our collection of fine <a href="/ships">space ships</a></p>
        </main>
      </body>
    </html>
  )
}
