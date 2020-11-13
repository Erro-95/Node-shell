// importing the files
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

//outputing this prompt
process.stdout.write("Prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") pwd();
  else if (cmd === "ls") ls();
  else if (cmd.includes("cat")) cat(cmd.split(" ")[1]);
  else process.stdout.write("You typed: " + cmd);

  process.stdout.write("\nPrompt > ");
});
