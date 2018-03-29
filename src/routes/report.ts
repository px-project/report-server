/**
 * report api
 */
import * as Router from 'koa-router';
import * as puppeteer from 'puppeteer';

export const ReportRouter = new Router();

ReportRouter.get('/reports', async ctx => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.baidu.com', { waitUntil: 'networkidle2' });
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();

    const filename = 'demo';

    ctx.set('Content-disposition', 'attachment; filename=' + filename);
    ctx.set('Content-type', 'application/pdf');

    ctx.body = pdf;
});
