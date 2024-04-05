import {Hono} from 'hono';
import {testClient} from 'hono/testing';
import {HtmlEscapedString} from 'hono/dist/types/utils/html';

export const render = async (component: HtmlEscapedString): Promise<HTMLElement> => {

    const app = new Hono()

    app.get('/', (c) => {
        return c.html(component)
    })

    const response = await testClient(app).$get()
    const htmlString = await response.text()

    const container = document.createElement('div')
    container.innerHTML = htmlString

    return container
}
