import getSongFromWishList from '../getSongFromWishList';

test('Verify get returns a json object', signalEndOfTest => {
  async function asynchTest() {
    const json = await getSongFromWishList(84, 'Respect', 37, 'Aretha Franklin');
    expect(json.songId).toBeDefined();
    expect(json.songName).toBeDefined();
    expect(json.artistId).toBeDefined();
    expect(json.artistName).toBeDefined();
    signalEndOfTest();
  }
  asynchTest();
});
