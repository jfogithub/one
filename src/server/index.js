const express = require('express')

const app = express()
const port = 10000

const logInfo = (info) => console.log(info)
const content = (req, res) => res.send('One')

app.get('/', content)

app.listen(port, logInfo(`Listening on port ${port}!`))


