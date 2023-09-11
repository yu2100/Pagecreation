
const now = new Date();
const year = now.getUTCFullYear();
const month = now.getUTCMonth() + 1;
const day = now.getUTCDate();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
const milliseconds = now.getUTCMilliseconds();

console.log(`${year}-${month}-${day}
                ${hours}:${minutes}:${seconds}.${milliseconds}`);
                

document.getElementById("time").textContent = now;                