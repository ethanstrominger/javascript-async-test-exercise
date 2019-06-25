import getWishList from '../getWishList';

test('Verify getWishList returns a json array', signalEndOfTest => {
  async function asynchTest() {
    const json = await getWishList('testWishList.json');
    expect(Array.isArray(json)).toBe(true);
    signalEndOfTest();
  }
  asynchTest();
});

// test('Verify get retrieves expected values', signalEndOfTest => {
//   async function asynchTest() {
//     const json = await getWishList(1, 'testWishList.json');
//     expect(json.wishListID).toBe(1);
//     expect(json.songID).toBe(32);
//     expect(typeof json.songTitle).toBe('Respect');
//     expect(json.artistID).toBe(37);
//     expect(json.artistName).toBe('Aretha Franklin');
//     signalEndOfTest();
//   }
//   asynchTest();
// });
