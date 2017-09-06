import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import favicon from 'serve-favicon';
import helmet from 'helmet';
import config from 'config';

const currentDirectory = process.cwd();
const port = process.env.PORT || 9000;

const app = express();

try {
  app.locals.assetPath = require('./utils/assetPath');
} catch (ex) {
  app.locals.assetPath = fileName => fileName;
}
app.use('/', express.static('public'));

app.set('views', `${currentDirectory}/app/views`);
app.set('view engine', 'pug');
app.use(bodyParser.json({ type: 'application/*', limit: '50mb' }));
app.use(bodyParser.text({ type: 'text/plain' }));
app.use(methodOverride());
app.use(favicon(path.join(currentDirectory, 'public', 'favicon.png')));
app.use(helmet());

app.get('/test/:id', (req, resp) => {
  // req.params.id;
  resp.render('test', { name: 'phong', key: config.get('key') });
});

app.get('/', (req, res) => {
  res.render('mysquar/index');
});

app.get('/products', (req, res) => {
  res.render('mysquar/products');
});

app.get('/products/mychat', (req, res) => {
  res.render('mysquar/mychat');
});

app.get('/products/callhome', (req, res) => {
  res.render('mysquar/callhome');
});

app.get('/products/fastsell', (req, res) => {
  res.render('mysquar/fastsell');
});

app.get('/products/mingalarbarmorning', (req, res) => {
  res.render('mysquar/mingalarbarmorning');
});

app.get('/products/landofmagic', (req, res) => {
  res.render('mysquar/landofmagic');
});

app.get('/products/myhero', (req, res) => {
  res.render('mysquar/myhero');
});

app.get('/products/hawkhero', (req, res) => {
  res.render('mysquar/hawkhero');
});

app.get('/products/myfish', (req, res) => {
  res.render('mysquar/myfish');
});

app.get('/products/luckywingabar', (req, res) => {
  res.render('mysquar/luckywingabar');
});

app.get('/contactus', (req, res) => {
  res.render('mysquar/contactus');
});

app.get('/community-standards', (req, res) => {
  res.render('mysquar/community');
});

app.get('/privacy', (req, res) => {
  res.render('mysquar/privacy');
});

app.get('/terms-of-service', (req, res) => {
  res.render('mysquar/terms');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

export default app;
