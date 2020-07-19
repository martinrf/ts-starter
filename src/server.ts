import App from './app';

import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';
import HealthController from './controllers/health.controller';
import RateController from './controllers/conversionRate.controller';

const app = new App({
  port: 5000,
  controllers: [new HealthController(), new RateController()],
  middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true }), loggerMiddleware],
});

app.listen();
