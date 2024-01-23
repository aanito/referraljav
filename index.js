const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const helmet = require('helmet');
const crypto = require('crypto');

const MongoStore = require('connect-mongo');

const app = express();
// const path = require('path');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Database connection
mongoose.connect(MONGODB_URI);
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
const adminRouter = require('./routes/admin');
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

app.use((req, res, next)=> {
  res.locals.nonce = crypto.randomBytes(16).toString('base64');
  next();
});

app.use(helmet.contentSecurityPolicy({
  directives: {
    // defaultSrc: ["'self'"],
    // scriptSrc: ["'self'", `'nonce-${res?.locals?.nonce}'`, "https://code.jquery.com", "https://maps.googleapis.com", "https://cdnjs.cloudflare.com"]
    'script-src-attr': ["'unsafe-inline'"],
    'script-src': ["'self'", "https://code.jquery.com", "https://maps.googleapis.com", "https://cdnjs.cloudflare.com"]
  }
}));

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
app.use('/admin', adminRouter);
// app.use('/services', require('./routes/services'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
