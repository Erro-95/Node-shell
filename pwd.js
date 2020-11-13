module.exports = (string) => {
  if (string === "pwd") {
    process.stdout.write(process.cwd());
    // Or
    // process.stdout.write(__dirname);
    process.stdout.write("\nPrompt > ");
  }
};
