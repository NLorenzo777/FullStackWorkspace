# Full Stack Development Notes

## Back end (Server Creation)
### Express JS
```javascript
import express from "express";
const app = express();
```

#### req and res objects.
`req` is for the request object. `res` is for the response object.

`res.sendFile(path)`: Sends a static file (html) as a response.
```javascript
app.post("/submit", (req, res) => {
    const name = req.body["name"];
    res.sendFile("index.html");
});
```

`res.render(path, data)`: Render a [template](Templating) file as a response.
```javascript
app.post("/submit", (req, res) => {
    res.render("index.ejs",
    { name: req.body["name"] }
    );
});
```




## Templating

### Embedded JavaScript (EJS)
- Common templating language for Express.js and Node.js.
- Dynamic JavaScript that can be run directly in html.
- Requires installation as a plugin in VSCode.
```html
<body>
    <ul>
        <% for ( let i=0; i < items.length ; i++) { %>
            <li>
                <%= items[i] %>
            </li>
        <% } %>
    </ul>
</body
```
