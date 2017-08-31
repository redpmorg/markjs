import express from 'express';

const app = express()
app.use('/', express.static('public'));
app.use(redirectUnmatched);

function redirectUnmatched(req, res) {
  res.redirect("/");
}

// my routes
// app.get('/', function(req, res) { ... });

app.listen(process.env.PORT || 3000);
