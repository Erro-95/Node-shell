const pwd = require("./pwd");

process.stdout.write("Prompt > ");

process.stdin.on("data", pwd.logic);
