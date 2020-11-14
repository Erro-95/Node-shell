// importing the files
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
const date = require("./date");
const echo = require("./echo");
const head = require("./head");
const tail = require("./tail");
const sort = require("./sort");

//outputing this prompt
process.stdout.write("Prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") pwd(done);
  else if (cmd === "ls") ls(done);
  else if (cmd.split(" ")[0] === "cat") cat(cmd.split(" ")[1], done);
  else if (cmd.split(" ")[0] === "curl") curl(cmd.split(" ")[1], done);
  else if (cmd === "date") date(done);
  else if (cmd.split(" ")[0] === "echo") echo(cmd.slice(5), done);
  else if (cmd.split(" ")[0] === "head") head(cmd.split(" ")[1], done);
  else if (cmd.split(" ")[0] === "tail") tail(cmd.split(" ")[1], done);
  else if (cmd.split(" ")[0] === "sort") sort(cmd.split(" ")[1], done);
  else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nPrompt > ");
  }
});

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nPrompt > ");
}
