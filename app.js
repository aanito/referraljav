const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// const MongoStore = new (require('connect-mongo')(session))(session);
const MongoStore = require('connect-mongo');

const app = express();
const hospitalsRouter = require('./routes/hospitals');
const homeRouter = require('./routes/home');
const hospitalAlbumRouter = require('./routes/hospitalAlbum');
const hospitalRouter = require('./routes/hospital');


const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect('mongodb://localhost/referral_dbase', {
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
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Session management
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/referral_dbase' }) 
  })
);

// Routes
app.use('/', require('./routes/index'));
app.use('/home', homeRouter);
app.use('/hospitals', hospitalsRouter);
app.use('/hospitalAlbum', hospitalAlbumRouter);
app.use('/hospital', hospitalRouter);
// app.use('/services', require('./routes/services'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
