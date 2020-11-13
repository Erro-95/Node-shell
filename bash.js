process.stdout.write("Prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    // process.stdout.write(__dirname);
    process.stdout.write(process.cwd());
  } else if (cmd !== "pwd") {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nPrompt > ");
});
