# File System Native Node Module
- The File System module is a native module that is already built in Node.js.
## Setup:
```javascript
import fs from 'fs';
```

## Methods:
### .readFile( filePath, encoding, callback ) Method
method used for reading files on local computer.

- `filePath` - the path of the file. Can be relative or absolute path.
- `encoding` - set to "utf8" by default.
- `callback` - Callback function in case an error occurs.

```javascript
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
### .writeFile( path, content, callback )
```javascript
fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
```

```javascript
const url = answers.URL;
    console.log(url);
    var qr_svg = qr.image(url);
    var writeStream = fs.createWriteStream("qr_img.png");
    qr_svg.pipe(writeStream);

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
```


--------------------------------------------------
### .createWriteStream( path, options)
Create a writable stream for writing data to a file.
```javascript
fs.createWriteStream("file.jpg")
```


--------------------------------------------------
### 
```javascript

```

[//]: # ([link_name]&#40;link here&#41;)

[//]: # (![alt text]&#40;image path here&#41;)


