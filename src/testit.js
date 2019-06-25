async function xyz() {
  return 'XYZ';
}
async function test() {
  let x = await xyz();
  console.log('X', x);
}
test();