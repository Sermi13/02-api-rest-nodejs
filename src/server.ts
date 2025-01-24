import { app } from './app';
import { env } from './env';

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Http server running at ${env.PORT}`);
    return;
  })
  .catch((err) => {
    console.error(`Failed to start server, error ${err.message}`);
  });
