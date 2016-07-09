export const getId = (function *() {
  let initNumber = 0;
  while(true) {
    initNumber = initNumber + 1;
    yield initNumber;
  }
}());
