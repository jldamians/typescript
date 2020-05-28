import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';

// importing routes
import IndexRoutes from './routes/index';
import BooksRoutes from './routes/books';

import('./database');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  helpers: require('./lib/helpers'),
}));
app.set('view engine', '.hbs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', IndexRoutes);
app.use('/books', BooksRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server run on port ${app.get('port')}`);
});
