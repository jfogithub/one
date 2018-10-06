import express from 'express'
import path from 'path'

import { config } from './config'

const {basepath, packagefolder, clientfolder} = config

const router = express.Router()

export const homeRoute = router.use(`${basepath}`, express.static(path.join(`${packagefolder}`, `${clientfolder}`)))



