const os = require('os');
console.log("homedir", os.homedir()); //C:/users/subhamsoni
console.log("freemem", os.freemem());
//console.log("cpus", os.cpus());
console.log("platform", os.platform()); //win32
//console.log("constants", os.constants);
console.log("arch", os.arch()); //x64
console.log("hostname", os.hostname()); //subhamsoni
console.log("loadavg", os.loadavg()); //[10,20,30,40,50]
//console.log("networkInterfaces", os.networkInterfaces()); //Network IP
console.log("release", os.release()); //release of OS
//setPriority
console.log("tmpdir", os.tmpdir());
console.log("totalmem", os.totalmem());
console.log("type", os.type()); //Windows_NT
console.log("uptime", os.uptime()); //uptime in seconds
console.log("userInfo", os.userInfo()); //{ uid: -1, gid: -1, username: 'subhamsoni', homedir: 'C:\\Users\\subhamsoni', shell: null }
