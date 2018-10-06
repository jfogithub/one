var express = require('express')
var path = require('path')

var config = require('./config')

const {basepath, packagefolder, clientfolder} = config

var router = express.Router()

router.use(`${basepath}`, express.static(path.join(`${packagefolder}`, `${clientfolder}`)))

module.exports = router



