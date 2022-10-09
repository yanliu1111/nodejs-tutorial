setInterval(() => {
  console.log("hello world");
}, 2000);
console.log(`I will run first`);
// setInterval is async, set interval runs in those increments 2000
//every 2 seconds the event loop is gone invoke the callback
