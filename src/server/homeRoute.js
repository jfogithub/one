import express from 'express';
import path from 'path';

import config from './config';

const {
  basepath,
  packagefolder,
  clientfolder,
} = config;

const router = express.Router();

const homeRoute = router.use(`${basepath}`, express.static(path.join(`${packagefolder}`, `${clientfolder}`)));

export default homeRoute;
