
const express = require("express");
const cors = require("cors");


const app = express();



// setup a ping route test : 

app.get("/api/ping", (req,res)=>{
    res.json({"message": "Pong!"}).status(200);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});