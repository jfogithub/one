const express = require('express')
var path = require('path')

const app = express()
const port = 10000
const basepath = '/'
const packagefolder = 'src'
const clientfolder = 'client'
const imagefolder = 'images'

const logInfo = (info) => console.log(info)

app.use(`${basepath}`, express.static(path.join(`${packagefolder}`, `${clientfolder}`)))
app.use(`${basepath}images`, express.static(path.join(`${packagefolder}`, `${imagefolder}`)))

app.listen(port, logInfo(`Listening on port ${port}`))


