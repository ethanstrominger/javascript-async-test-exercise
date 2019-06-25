import getSongFromWishList from '../getSongFromWishList';

// test('Verify get returns a json object', signalEndOfTest => {
//   async function asynchTest() {
//     const json = await getSongFromWishList(84);
//     expect(json.wishListID).toBeDefined();
//     expect(json.songID).toBeDefined();
//     expect(typeof json.songTitle).toBe('string');
//     expect(json.artistID).toBeDefined();
//     expect(json.artistName).toBeDefined();
//     signalEndOfTest();
//   }
//   asynchTest();
// });

test('Verify get retrieves expected values', signalEndOfTest => {
  async function asynchTest() {
    const json = await getSongFromWishList(1, 'testWishList.json');
    expect(json.wishListID).toBe(1);
    expect(json.songID).toBe(32);
    expect(typeof json.songTitle).toBe('Respect');
    expect(json.artistID).toBe(37);
    expect(json.artistName).toBe('Aretha Franklin');
    signalEndOfTest();
  }
  asynchTest();
});
