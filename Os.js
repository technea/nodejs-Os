import { console } from "node:inspector";
import os, { freemem } from "node:os";

const cpus = os.cpus();
console.log("Cpus",cpus)
console.log("Memory",os.totalmem()/(1024*1024*1024))
console.log('Freememory',os.freemem()/1024*1024)
console.log("uptime",os.uptime()/60*60)
console.log("Hostman",os.hostname())
console.log("Userinfo",os.userInfo())
console.log("Machine",os.machine())