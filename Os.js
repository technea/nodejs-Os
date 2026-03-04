import os from "node:os";

const cpus = os.cpus().length;
console.log("Cpus",cpus)
console.log(os.totalmem*10248**3)