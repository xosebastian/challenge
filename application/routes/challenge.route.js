import ChallengeController from '../controllers/challenge.controller';

exports.routesConfig = (app) => {
  app.post('/findTwoBeers/', [
    ChallengeController,
  ]);


};
