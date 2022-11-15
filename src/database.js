const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conected to database "))
.catch(error => console.error(error))