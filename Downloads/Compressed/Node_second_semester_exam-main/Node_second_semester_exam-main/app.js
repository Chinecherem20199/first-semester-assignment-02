const express = require('express');
const blogsRoute = require('./route/blog_route');
const userRoute = require('./route/user_route');

//  const bodyParser = require('body-parser');

require('./auth/passport')

const app = express();

//  app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/blogs', blogsRoute);
app.use('/', userRoute);


app.get('/', (req, res) => {
    console.log(res)
    return res.json({ message: "Welcome to the blog API", status: true });    
});

app.use("*", (req, res) => {
  return res.status(404).json({ message: "route not found" });
});


module.exports =  app ;