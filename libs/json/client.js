const fs = require("fs");

// Read from a JSON file.
function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

jsonReader("./data/all.json", (err, data) => {
  if (err) {
    console.log(`${err}`);
  } else {
    for (let i = 0; i < data.clients.length; i++) {
      console.log(`${JSON.stringify(data.clients[i].client_comp_name)}`);
    }
  }
});
