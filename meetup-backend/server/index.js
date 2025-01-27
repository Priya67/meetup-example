import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { MeetupRoutes } from './modules';

const app = express();

/**
* Database
*/

dbConfig();

middlewaresConfig(app);

app.use('/api', [MeetupRoutes]);

const PORT = process.env.port || 3000;

app.listen(PORT, err => {
  if(err) {
    console.error(err);
  } {
    console.log(`App listen to port: ${PORT}`);
  }
});
