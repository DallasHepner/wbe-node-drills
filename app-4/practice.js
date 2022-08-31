const fs = require('fs')
const path = require('path')

fs.appendFile(path.join(__dirname, "text.txt"), "Hello World!", (err) => {
    if (err) {
        console.log(err)
    }else {
        console.log("Successful!")
    }
})

fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err)
    }else {
        console.log(data, "Successful!")
    }
})

fs.writeFile(__dirname + "/text.txt", "Hello World!", (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log("Successful rewrite!")
    }
})

fs.rename(__dirname + "/text.txt", __dirname + "/somethingElse.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successful renamed!");
    }
  });

fs.unlink(__dirname + "/text.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successful unlinked!");
    }
  });