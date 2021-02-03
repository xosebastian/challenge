import HttpStatus from "http-status-codes";
import findTwoBeers from '../utils/findTwoBeers';


export default (req, res) => {
  const {
    body: { beers, target },
  } = req;

  return res.status(HttpStatus.OK).send({ index: findTwoBeers(beers, target) });
};
