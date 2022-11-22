
const app = require('./app')
require("./db").connectToMongoDB(); // Connect to MongoDB
require("dotenv").config();

const PORT = process.env.PORT || 3355;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});