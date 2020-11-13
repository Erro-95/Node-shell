const fs = require("fs");

module.exports = () => {
  
  
  fs.readdir(__dirname, (err, data) => {

    if(err){
      throw err;
    } else{

      //   process.stdout.write("\n");
      process.stdout.write(
        data
          .map((element, index) => {
            if (index !== 0) {
              return `   ${element}`;
            }
            return `\n${element}`;
          })
          .join("")
      );
      process.stdout.write("\nPrompt > ");
  
    }
    
  });
};
