# File System Native Node Module
- The File System module is a native module that is already built in Node.js.
---

## Setup:
```javascript
import fs from 'fs';
```

## Methods:

-------------------------------------------------------
#### .readFile() Method
`fs.readFile( filePath, encoding, callback)` : method used for reading files on local computer.

- `filePath` - the path of the file. Can be relative or absolute path.
- `encoding` - set to "utf8" by default.
- `callback` - Callback function in case an error occurs.

```jsregexp
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```
-------------------------------------------------
#### .writeFile( path, callback )
```javascript
fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
```

--------------------------------------------------
#### .createWriteStream( path, options)
Create a writable stream for writing data to a file.
```javascript
fs.createWriteStream("file.jpg")
```

[link_name](link here)

![alt text](image path here)


