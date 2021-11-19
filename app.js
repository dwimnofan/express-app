import express from "express";

import Router from "./routes/routes.js";

const app = express();

app.use(Router);

//error handling --> 404 page
app.get('*', function(req, res){
    res.status(404).send('<h1>Sorry, page not found :(</h1>');
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));