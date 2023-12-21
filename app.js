const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const MongoStore = require('connect-mongo');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Database connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

// Middleware

// Setting the views directory and the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve CSS and JS files from their respective directories
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// const indexRouter = require('./routes/index');
const hospitalsRouter = require('./routes/hospitals');
const homeRouter = require('./routes/home');
const hospitalAlbumRouter = require('./routes/hospitalAlbum');
const hospitalRouter = require('./routes/hospital');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const servicesRouter = require('./routes/services');
const landingRouter = require('./routes/landing');
// const hospitalSearch = require('./routes/home');


// Session management
// app.use(
//   session({
//     secret: 'SECRET_KEY',
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({ mongoUrl: 'mongodb://localhost/referral_dbase' }) 
//   })
// );

// Routes
app.use('/landing', landingRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/', homeRouter);
app.use('/home', homeRouter);
app.use('/hospitals', hospitalsRouter);
app.use('/hospitalAlbum', hospitalAlbumRouter);
app.use('/hospital', hospitalRouter);
app.use('/services', servicesRouter);
// app.use('/services', require('./routes/services'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
