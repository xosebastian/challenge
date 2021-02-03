exports.findTwoBeers = (beers, target) => {
    let l = 0;
    let x = 0;
    let s = [];
    let r = [];
  
    l = beers.length - 1;
    s = [...beers].sort();
  
    while (x < l) {
      if (s[x] + s[l] == target) {
        r.push([beers.indexOf(s[x]), beers.indexOf(s[l])]);
        x++;
      } else if (s[x] + s[l] < target) {
        x++;
      } else {
        l--;
      }
    }
  
    return r;
  };