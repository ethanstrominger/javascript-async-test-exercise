export default function insertSongToWishList(
  songId,
  SongTitle,
  artistId,
  artistName
) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(99);
    }, 0);
  }).catch(err => {
    return Error(err);
  });
}
