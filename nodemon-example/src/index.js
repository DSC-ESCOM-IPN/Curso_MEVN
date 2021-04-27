const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World from DSC Nodemon example with Podman and Volumes!')
})

app.listen(port, () => {
    console.log(`Nodemon example with Podman and Volumes listening at http://localhost:${port}`)
})
