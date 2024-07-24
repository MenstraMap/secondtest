var express = require("express");

var app = express();
app.listen(3005, () => {
 console.log("Server running on port 3005");
});

app.get("/url", (req, res, next) => {
    res.json(["Bob","Lisa","Michael","Garlic","Food"]);
   });

