import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Hello from './public/components/Hello'

const app = express()

app.use('/static', express.static(path.resolve(__dirname, 'public')))

// app.get('/', (req, res) => {
//   const name = 'Marvelous Wololo'

//   const component = ReactDOMServer.renderToString(<Hello name={name} />)

//   const html = `
//   <!doctype html>
//     <html>
//     <head>
//       <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
//     </head>
//     <body>
//     <div id="root">${component}</div>
//     <script src="/static/home.js"></script>
//   </body>
//   </html>`

//   res.send(html)
// })

//generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.
app.get('/', (req, res) => {
    const name = 'Marvelous Wololo'

    const componentStream = ReactDOMServer.renderToNodeStream(
        <Hello name={name} />
    )

    const htmlStart = `
    <!doctype html>
      <html>
      <head>
        <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
      </head>
      <body>
      <div id="root">`

    res.write(htmlStart)

    componentStream.pipe(
        res,
        { end: false }
    )

    const htmlEnd = `</div>
      <script src="/static/home.js"></script>
    </body>
    </html>`

    componentStream.on('end', () => {
        res.write(htmlEnd)

        res.end()
    })
})

app.listen(3000)