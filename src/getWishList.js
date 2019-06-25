export default async function getWishList(file) {
  function fetchJsonFromFile(file, cb) {
    const fs = require('fs');
    // using readFile instead of readFileSync to practice asynchronous callback
    // more similar to web services
    fs.readFile(file, (err, rawData) => {
      if (err) {
        throw Error(err);
      }
      let data = JSON.parse(rawData);
      let retVal = data.WishList;
      cb(retVal);
    });
  }

  let result = new Promise(function(resolve) {
    fetchJsonFromFile(file, json => {
      resolve(json);
    });
  });

  return await result;
}
