import getWishList from './getWishList';

export default async function getSongFromWishList(WishListID, file) {
  let jsonArray = await getWishList(file);
  let retVal;
  jsonArray.forEach(function(json) {
    if (json.WishListID === WishListID) {
      retVal = json;
    }
  });
  return retVal;
}
