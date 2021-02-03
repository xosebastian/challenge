import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/env.config';
import ChallengeRouter from './routes/challenge.route';


const app = express();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

ChallengeRouter.routesConfig(app);

app.listen(config.port, () => {
  console.log('\x1b[34m', `Application listening at port ${config.port}`, '\x1b[0m');
});
