import {FC} from "hono/jsx";

export const Layout: FC = ({children})=>{

    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/public/global.css"/>
                <link rel="stylesheet" href="/public/page.css"/>
                <title>HexSpace</title>
                <meta content="width=device-width, initial-scale=1" name="viewport"/>
                <meta name="description" content="Sell your used space ships."/>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <body>{children} </body>
        </html>
    )



}
