import getWishList from './getWishList';

export default async function getSongFromWishList(WishListID, file) {
  let jsonArray = await getWishList(file);
  let retVal;
  for (let i = 0; i < jsonArray.length; i++) {
    let json = jsonArray[i];
    if (json.WishListID === WishListID) {
      retVal = json;
      break;
    }
  }
  return retVal;
}
