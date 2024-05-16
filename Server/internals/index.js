import crypto from "crypto";
process.env.UV_THREADPOOL_SIZE = 2;
const processStart = Date.now();
function processfun(num) {
  crypto.pbkdf2("abc", "bcd", 100000, 512, "sha512", () => {
    console.log(`${num}:`, ((Date.now() - processStart) / 1000).toFixed(4));
  });
}

processfun(1);
processfun(2);
processfun(3);
processfun(4);
processfun(5);
