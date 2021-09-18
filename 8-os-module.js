const os = require("os");

const user = os.userInfo();

// info about the current user
console.log(user);

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime() / 3600} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
