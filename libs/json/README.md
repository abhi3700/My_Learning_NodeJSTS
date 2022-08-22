# JSON

Read/Write with JSON files

## Coding

- Read JSON data from disk
- Learn to use `fs` module to interact with the filesystem
- Persist data to a JSON file
- Use `JSON.parse` and `JSON.stringify` to convert data to and from JSON format

### Using `require`

**Code**:

```js
const customer = require("./data/customer.json");

console.log(`${customer.address}`);
```

**Output**:

```console
❯ node index.js
Infinity Loop Drive
```

> This is fine for loading static data on startup (like config data). But for reading a file that changes on disk, like our customer.json might, we need to manually read the file using the asynchronous fs.readFile.

### Using `fs`

We use `fs` module to read/write from/to a JSON file.

#### Read

Read from a JSON file.

Both `fs.readFileSync` and `fs.readFile` take an optional encoding argument. If you specify a character encoding you'll get a string in return. If you do not specify a character encoding both functions will return a Buffer.

> `fs.readFile` (async version) is recommended.

For reading data from JSON file, use this code:

```js
const fs = require("fs");

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

jsonReader("./data/customer.json", (err, customer) => {
  if (err) {
    console.log(`${err}`);
  } else {
    console.log(`Address: ${customer.address}`);
  }
});
```

- There is a reusable helper function - `jsonReader` which returns error (type: string) & customer (type: JSON object)
- Here, there is a callback function `(err, customer) => {}`.
- The customer param in the callback function is a JSON object, not string as `JSON.parse()` is used in the helper function

#### Write

Write to a JSON file.

---

In order to write to a **new JSON file**, use this code:

```js
const fs = require("fs");

const newObject = {
  name: "Abhi",
  order_count: 10,
  address: "5 Garfa 6th Lane, Kolkata",
};

fs.writeFile(
  "./data/newCustomer.json",
  JSON.stringify(newObject, null, 2),
  (err) => {
    if (err) {
      console.log(`error: ${err}`);
    } else {
      console.log(`File successfully written`);
    }
  }
);
```

---

In order to write to an **existing JSON file**, use this code:

```js
const fs = require("fs");

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
```

Here, the `order_count` is incremented by 1.

## References

- [Read/Write JSON Files with Node.js](https://heynode.com/tutorial/readwrite-json-files-nodejs/)
