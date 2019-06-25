import insertSongToWishList from '../insertSongToWishList';

test('Verify inserting returns an id', signalEndOfTest => {
  async function asynchTest() {
    const id = await insertSongToWishList(84, 'Respect', 37, 'Aretha Franklin');
    expect(typeof id).toBe('number');
    signalEndOfTest();
  }
  asynchTest();
});
