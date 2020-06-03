import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { organ } from "https://raw.githubusercontent.com/denjucks/organ/master/mod.ts";
import { appConfig } from "./config.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Snelm } from "https://deno.land/x/snelm/mod.ts";
import { IDs } from "./platform_IDs.ts";
import { API } from "./api.ts";
// import axiod from "https://deno.land/x/axiod/mod.ts";


// const API = axiod.create({
// 	baseURL: "https://api-v3.igdb.com/",
// 	headers: {"user-key": "bb2aedca0775a449624cae062ea21d0f"}
// });

console.log(API)

const organOption = (appConfig.DENO_ENV === 'production')
	? 'tiny'
	: 'common';

const router = new Router();
router
	.get('/', (context) => {
		context.response.body = "Response, homie.";
	})
	.get('/games', async (context) => {
		const gamesResponse = await API.get("/games");
		context.response.body = "random string";
	})

const snelm = new Snelm("oak");
await snelm.init();

const app = new Application();
app.use(organ(organOption));
app.use((ctx, next) => {
	ctx.response = snelm.snelm(ctx.request, ctx.response);
	next();
})
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

export { app }