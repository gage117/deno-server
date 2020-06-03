import { config } from "https://deno.land/x/dotenv/mod.ts";

export const appConfig = {
	PORT: config().PORT || 8000,
	DENO_ENV: config().DENO_ENV || 'development'
  };