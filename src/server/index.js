const express = require('express')
var path = require('path')

var config = require('./config')
var homeRoute = require('./homeRoute')

const {port, basepath, packagefolder, imagefolder} = config

const app = express()

const logInfo = (info) => console.log(info)

app.use(`${basepath}images`, express.static(path.join(`${packagefolder}`, `${imagefolder}`)))
app.use(`${basepath}`, homeRoute)
app.listen(port, logInfo(`Listening on port ${port}`))


