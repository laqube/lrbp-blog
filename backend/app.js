const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/user-routes");
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.json()); //middleware to recieve json files
app.use('/api', router);
mongoose
.connect("mongodb+srv://laqube:NB!pK$FR8$KO@cluster0.pmkdbzp.mongodb.net/lrbp-blog-db?retryWrites=true&w=majority").then(()=>{
    app.listen(5000);
    console.log("DB Qosyldy! Port lohalhost 5K");
}).catch((err)=>console.log(err));  
