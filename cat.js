const fs = require("fs");

module.exports = (fileName) => {
    fs.readdircat(process.cwd(), (err,data) => {

        if(err){
          throw  err;
        }else{

           process.stdout.write(fs.readFile(data.filter(file => file === fileName).join())); 



        }


    })
} 