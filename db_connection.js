require("dotenv").config();
const mongoose = require("mongoose");

const mongodb_Uri = process.env.MONGODB_URI;

//connecting mongodb database
mongoose
  .connect(mongodb_Uri)
  .then(() => {
    console.log(`Mongodb connected successfully 🙅🙅  `);
  })
  .catch((err) => {
    console.log(err);
    console.error(
      "Error: Mongoose couldnt be connected at this moment. Technical issue ❌ ❌ ❌ ❌ "
    );
  });
