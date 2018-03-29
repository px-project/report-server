/**
 * report api
 */
import * as Router from 'koa-router';

export const ReportRouter = new Router();

ReportRouter.get('/reports', async ctx => {
    ctx.body = 'pong';
});
