var fs = require("fs");


const d = new Date();


const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//writing in a file 

eventEmitter.on("start", () => {
  fs.writeFile("./data/message.txt", `${d}`, function (err) {
    if (err) throw err;
  });
});

// eventEmitter.on('start',(start,end)=>{
//     console.log(`started from ${start} to ${end}`);
// })

//writes in a file only after this is executed

eventEmitter.emit("start",1,100);

console.log("writing completed");
