import HttpStatus from "http-status-codes";

export default (req, res) => {
  const {
    body: { beers, target },
  } = req;

  let l = 0;
  let x = 0;
  let s = [];
  let index = [];

  l = beers.length - 1;
  s = [...beers].sort();

  while (x < l) {
    if (s[x] + s[l] == target) {
      index.push([beers.indexOf(s[x]), beers.indexOf(s[l])]);
      x++;
    } else if (s[x] + s[l] < target) {
      x++;
    } else {
      l--;
    }
  }

  return res.status(HttpStatus.OK).send({ index });
};



