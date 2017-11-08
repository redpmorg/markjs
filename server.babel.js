import express from 'express';

const app = express()
app.use('/', express.static('public'));

function redirectUnmatched(req, res) {
  res.redirect("/");
}

app.use(redirectUnmatched);

app.listen(process.env.PORT || 3000);
