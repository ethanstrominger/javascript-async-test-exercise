export default async function verifyAsyncFunction() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ASYNC VERIFIED');
    }, 0);
  }).catch(err => {
    return Error(err);
  });
}
