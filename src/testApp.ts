import { Application } from "https://deno.land/x/oak/mod.ts";
import { Snelm } from "https://deno.land/x/snelm/mod.ts";

const app = new Application();

// Configuring Snelm for the Oak framework
const snelm = new Snelm("oak");
await snelm.init();

// Snelm Middleware for Oak
app.use((ctx, next) => {
    ctx.response = snelm.snelm(ctx.request, ctx.response);

    next();
});

app.use((ctx) => {
    ctx.response.body = "Oak";
});

export { app }