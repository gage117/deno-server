import {appConfig} from './config.ts';
import { app } from './app.ts'; 

const port = Number(appConfig.PORT);

console.log(`Server is listening at http://localhost:${port}`)
await app.listen({ port });