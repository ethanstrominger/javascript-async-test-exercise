import getWishList from '../getWishList';

test('Verify getWishList returns a json array', signalEndOfTest => {
  async function asynchTest() {
    const jsonArray = await getWishList('testWishList.json');
    expect(Array.isArray(jsonArray)).toBe(true);
    const json = jsonArray[0];
    expect(json.WishListID).toBeDefined();
    expect(json.SongID).toBeDefined();
    expect(typeof json.SongTitle).toBe('string');
    expect(json.ArtistID).toBeDefined();
    expect(typeof json.ArtistName).toBe('string');
    signalEndOfTest();
  }
  asynchTest();
});

// test('Verify get retrieves expected values', signalEndOfTest => {
//   async function asynchTest() {
//     const json = await getWishList(1, 'testWishList.json');

//   }
//   asynchTest();
// });
