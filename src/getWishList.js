export default async function getWishList(file) {
    const fs = require('fs');
    let rawdata = fs.readFileSync(file);
    let data = JSON.parse(rawdata);
    let retVal = data.WishList;
    return retVal;
}
