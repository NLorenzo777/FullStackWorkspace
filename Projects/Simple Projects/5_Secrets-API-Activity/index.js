import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app = express();
const port = 2525;
const __dirname = dirname(fileURLToPath(import.meta.url))
const endpoint = "https://secrets-api.appbrewery.com/random";


//middlewares:
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});

app.get("/", async (req, res) => {
    const result = await axios.get(endpoint); //Returns a JS Object from a JSON thanks to Axios module.
    res.render(__dirname + "/views/index.ejs", 
        {
            variable1_username : result.data.username,
            variable2_secret : result.data.secret
        }
    );
})
