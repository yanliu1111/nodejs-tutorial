const { readFile, writeFile } = require("fs");
console.log("Staring");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task");
      }
    );
  });
});
console.log("Starting the next");
/*
$ node 11-fsAsync.js 
Staring
Starting the next
Done with this task
we can offload that task and then we start a next task right away
*/
