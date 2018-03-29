import * as koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as routes from './routes';

const _router = new KoaRouter();

export class Router {
    static init(app: koa) {
        Object.values(routes).forEach(route => {
            if (route instanceof KoaRouter) _router.use(route.routes());
        });

        app.use(_router.routes());
    }
}
