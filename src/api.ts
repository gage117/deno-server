import { soxa } from 'https://deno.land/x/soxa/mod.ts'

const API = soxa;
API.defaults.baseURL = "https://api-v3.igdb.com/"
API.defaults.headers.common['user-key'] = "bb2aedca0775a449624cae062ea21d0f"

export { API };