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
   - [Node.js](#node-js) 
   - [Express.js](#express-js)

## Front End
### Form Creation in HTML
```html
<form action="endpoint" method="POST">
   <button type="button" value="value1" name="key1"></button>
   <button type="button" value="value2" name="key2"></button>
   <button type="button" value="value3" name="key3"></button>
</form>
```
- Sends in a key-value pair to the back end since it is a POST route.

## Back End (Server Creation)
### Node JS
#### Sample HTTP Request using Native Node.js
```javascript
import https from "https";

app.get("/", (req, res) => {
   const options = {
      hostname: "www.url.com";
      path: "/random";
      method: "GET"
   };
   
   const request = https.request(options, (response) => {
      let data = "";
      response.on("data", (chunk) => {
         data += chunk;
      });
      
      response.on("end", () => {
         try {
            const result = JSON.parse(data);
            res.render("index.ejs", {activity: data});
         } catch {
            console.error("Failed to parse response:", error.message);
            res.status(500).send("Failed to fetch activity. Please try again);
         }
      });
   });
   
   request.on("error", (error) => {
      console.error("Failed to parse response:", error.message);
      res.status(500).send("Failed to fetch activity. Please try again);
   });
});


```

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
#### Interface:
- A blueprint for a class that defines a contract of methods that a class must implement.
- It specifies what a class should do but not how it should do it.
- It helps achieve **abstraction** and **loose coupling** in software design.

#### Application Programming Interface (API)
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

#### `const jsData = JSON.parse(jsonData)`
A code from the JSON module which converts a JSON format into a JS Object.

## API Request through Axios
- Promise based.
- Automatically converts received JSON data to JS object.

Example HTTP request using axios.
```javascript
import axios from "axios";

app.get("/", async (req, res) => {
   try {
      //await response before proceeding to render.
      const response = await axios.get("www.api-url-here.com");
      
      //process the received data.
      res.render("index.ejs", { activity: response.data });
   } catch (error) {
      //error processing here...
   }
});
```

## API Authentication
### Level 0: No Authentication
- Direct authentication
- API requests are controlled through rate limits.
- Checking of IP address how frequent it throws a request.

### Level 1: Basic Authentication
- *Username* and *Password*.
- Passing a **Base64 Encoding** into the header of the `request`. 
- The `username:password` is converted into Base64 and this converted format
is pass along the request.
- Can be easily decoded therefore has the least security.
- Uses HTTPS encryption when being transported back and forth.

### Level 2: API Key Authorization
- A lot of public API uses API key as a way to allow requests.
- an API key can be used to be associated for a certain credential or group.
- Can be  used  to count the number of request associated to an API key.

### Level 3: Token Based Authentication
- A token is generated upon login using the username and password.
- The token is used with the API. Therefore, the API does not use the username and password.
It is the token that communicates with the API.
- Normally `OAuth` and `OAuth2.0` as the standard.
- Real life example is the **Google Sign-in**.]
- The API provider generates a token that will act on your behalf.