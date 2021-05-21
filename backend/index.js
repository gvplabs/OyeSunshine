/*
dependencies
*/

const express = require('express')

/* config - express
*/

const app = express()
const port = 3000

/*
Endpoint - posts
*/

app.get('/posts', (request, response) => {
    let posts = [
       {
        caption: 'Golden Gate Bridge',
        location: 'San Francisco'

       },
       {
        caption: 'London Eye',
        location: 'London'
       }

    ]
  response.send(posts)
})

/*
listen
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})