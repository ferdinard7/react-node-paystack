const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express();
 
const port = process.env.PORT || 3000;


app.use(cors());   
app.use(express.json());
app.use("/api/checkout", require("./routes/paystackRoute"));




app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
  })
