const fs = require("fs");

// ################################################################
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

// jsonReader("./data/customer.json", (err, customer) => {
//   if (err) {
//     console.log(`${err}`);
//   } else {
//     console.log(`Address: ${customer.address}`);
//   }
// });

// ################################################################
// In order to write to a new JSON file, use this code:
// const newObject = {
//   name: "Abhi",
//   order_count: 10,
//   address: "5 Garfa 6th Lane, Kolkata",
// };

// fs.writeFile(
//   "./data/newCustomer.json",
//   JSON.stringify(newObject, null, 2),
//   (err) => {
//     if (err) {
//       console.log(`error: ${err}`);
//     } else {
//       console.log(`File successfully written`);
//     }
//   }
// );

// ================================================================
// In order to write to an existing JSON file, use this code:
jsonReader("./data/customer.json", (err, customer) => {
  if (err) {
    console.log(`${err}`);
  } else {
    customer.order_count += 1;
    fs.writeFile(
      "./data/customer.json",
      JSON.stringify(customer, null, 2),
      (err) => {
        if (err) {
          console.log(`error: ${err}`);
        } else {
          console.log(`File successfully written`);
        }
      }
    );
  }
});
