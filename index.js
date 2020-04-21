const express=require("express");
const bodyParser=require("body-parser");

const app= express();
const port= 3333
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

require("./controllers/authcontroller")(app);

app.listen(port);
console.log(`server running at port ${port}`)