/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import fileupload from 'express-fileupload';
import bodyParser from 'body-parser';
import cors from 'cors';

import dbConnect from './database';

const app = express();
dbConnect();

app.enable('trust proxy');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileupload({ useTempFiles: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
