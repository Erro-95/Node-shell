const pwd = require("./pwd");
const ls = require("./ls");

process.stdout.write("Prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  pwd(cmd);
  ls(cmd);

  //   process.stdout.write("You typed: " + cmd);
});
