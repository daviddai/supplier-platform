import express from 'express';
import bodyParser from 'body-parser'
import React from 'react';
import { renderToString } from 'react-dom/server';

import Application from '../Application';
import Greeting from '../component/Greeting';

import getRendered from './index';

const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.use('/static', express.static('build/client'));

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/ssr', (req, res) => {
    const html = getRendered(renderToString(<Greeting salution="Mr" name="David" />))
    res.send(html);
});

app.post('/render', (req, res) => {
    const { requestUri } = req.body;
    const html = getRendered(renderToString(<Application requestUri={requestUri} />))
    res.set('ContentType', 'text/html');
    res.status(200);
    res.end(html);
});

app.listen(5000, () => {
    console.log('Server is now running and listening on port 5000....');
});