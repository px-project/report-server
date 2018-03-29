// tslint:disable:no-var-requires
import * as koa from 'koa';
import * as KoaBody from 'koa-bodyparser';
import { Logger } from './utils';
const KoaCors = require('koa-cors');
import * as http from 'http';
import * as KoaLogger from 'koa-logger';
import { PORT } from './config';
import { Router } from './router';

const app = new koa();

app.use(KoaLogger());
app.use(KoaBody());

app.use(KoaCors({ credentials: true }));

Router.init(app);

export default app.listen(PORT, () => {
    Logger.log(`runtime env: ${process.env.NODE_ENV}.`);
    Logger.log(`server running at ${PORT} ports.`);
});

process.on('SIGINT', () => process.exit(0));
