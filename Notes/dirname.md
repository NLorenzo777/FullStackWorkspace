# Creating dynamic directory string

1. Import `dirname` and `fileURLToPath` from dirname and url module respectively.
```javascript
import { dirname } from "path";
import { fileURLToPath } from "url"; 
```

2. Initialize the `__dirname` variable.
```javascript
const __dirname = dirname(fileToURLPath(import.meta.url)); 
```

3. Use the `__dirname` when accessing a relative file.
```javascript
res.render(__dirname + "/view/index.ejs"); 
```