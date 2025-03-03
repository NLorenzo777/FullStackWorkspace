# Full Stack Development Notes
#### ``Authored by: Noel Lorenzo Pagatpat, ECE, ECT``

This file serves as a digital notebook containing personalized information that
I might find useful (and maybe to you as well). This reflects my continuous learning progress
as a Full Stack developer.

#### Why do this instead of browsing the internet?
The internet contains an ocean of contents. Some may be useful, some may be not.
Searching through the gems may consume most of my precious time. So instead of exhausting
such resource, I try to put all the information that are new to me right here and centralized it.
Which gives me the ability to open it anywhere on demand.


1. Back End (Server Creation)
   - [Express.js](#express-js)


## Back end (Server Creation)
### Express JS
```javascript
import express from "express";
const app = express();
```

#### req and res objects
`req` is for the request object. `res` is for the response object.

`res.sendFile(path)`: Sends a static file (html) as a response.

```javascript
app.post("/submit", (req, res) => {
    const name = req.body["name"];
    res.sendFile("index.html");
});
```

`res.render(path, data)`: Render a [template](#Templating) file as a response.
```javascript
app.post("/submit", (req, res) => {
    res.render("index.ejs",
    { name: req.body["name"] }
    );
});
```

## Middlewares
- Pre-processes raw data.
- Can be used for logging requests.
- For authentication before accessing the server functions. E.g., checking
client-side who made the request if it is authorized or not.
- To process errors before going to final routing.

```javascript
//in Express
app.use(bodyParser.urlencoded({extended: true});
```
To use a middleware, the `.use()` method of express is utilized.


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

#### EJS Tags:
- `<%= variable %>`: Interpreted JavaScript with an output.
- `<% console.log("hello") %>`: Executed JavaScript. For logic execution. Does not give output.
- `<%- <h1>Hello</h1> %>`: Render an HTML element.
- `<% % % %>`: Escaping an EJS.
- `<% #This is a comment %>`: Creating a comment.
- `<%- include("header.ejs") %>`: Insert another EJS file.

## Application Programming Interfaces (API)
**Interface**:
- A blueprint for a class that defines a contract of methods that a class must implement.
- It specifies what a class should do but not how it should do it.
- It helps achieve **abstraction** and **loose coupling** in software design.

** Application Programming Interface (API) **
Set of protocols that allows different software applications to communicate
with each other.
1. **REST (Representational State Transfer) API**: Uses HTTP methods.
2. **SOAP (Simple Object Access Protocol) API**: Uses XML for structured messaging.
3. **GraphQL API**: Allows clients to request only the data needed.
4. **Library API**: Provided by programming languages (e.g. Java's collection API).

### Structuring API Requests
#### 1. API Endpoints
Typically, a route on the API provider's server.
```regexp
www.BaseURL.com/Endpoint
```

#### 2. Query Parameters
Used for filtering and searching.
```regexp
www.BaseUrl.com/Endpoint?query1=value1&query2=value2
```

#### 3. Path Parameters
Used for identifying a resource by some specific (unique) parameters.
```regexp
BaseURL/Endpoint/39430982
```

## JavaScript Object Notation (JSON)
- Usual structure response in web APIs.
- Serialized into a string since it is being transferred within the internet.
- It is a flat packaged file. Meaning, it is a string in format during transportation
and later be converted in a usable format. Just like the delivering idea behind IKEA in which
the item is in a part-by-part form and then assembled upon delivery.

### JSON vs JavaScript
```json
{
  "name": "Noel Lorenzo",
  "age": 18,
  "education": [
    {"degree": "doctor",
      "university": "Illinois State University"
    }
  ]
}
```
```javascript
const jack = {
	name: “Noel Lorenzo",
	age: 18,
	education: [
	{degree: “Engineering”,
	university: “PLP”
	}]
}
```

### Usable Methods:
#### `const jsonData = JSON.stringify(data)`
A code from the JSON module which converts a JavaScript object into a string.
JS Object to JSON format.

#### `const data = JSON.parse(jsonData)`
A code from the JSON module which converts a JSON format into a JS Object.


