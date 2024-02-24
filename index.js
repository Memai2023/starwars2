import express from "express";
import jediRouter from "./routes/jedi.js";
import sithRouter from "./routes/sith.js";
import * as path from "path";

const app = express();
const port = 3005;
const __dirname = path.resolve();

app.get('/', (req, res) => { 
    res.render("pages/home", {
        pageTitle: "Welcome to the new StarWars page from index.js",
        subTitle: "Here is another paragraph in homepage",
        underline: true
    })
});


app.use('/jedi', jediRouter);
app.use('/sith', sithRouter);

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, console.log(`Listening to ${port}`));