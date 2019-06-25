import getSongFromWishList from '../getSongFromWishList';

test('Verify get retrieves expected values', signalEndOfTest => {
  async function asynchTest() {
    const json = await getSongFromWishList(1, 'testWishList.json');
    expect(json.WishListID).toBe(1);
    expect(json.SongID).toBe(32);
    expect(json.SongTitle).toBe('Respect');
    expect(json.ArtistID).toBe(37);
    expect(json.ArtistName).toBe('Aretha Franklin');
    signalEndOfTest();
  }
  asynchTest();
});
