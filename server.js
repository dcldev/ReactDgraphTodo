const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;


//Creating the Express server, attaching middleware CORS and Body-Parser
app.use(cors());
app.use(bodyParser.json());
//Making the server to listen on port 4000
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);

});