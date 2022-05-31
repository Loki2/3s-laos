const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const session = require('express-session');

const app = express();

//Initialization Middleware
app.use(morgan('dev'));
app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, '../', 'temp'),
    createParentPath: true,
    limits: { fileSize: 5 * 1024 * 1024 }
  }))

//Init session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      httpOnly: true
    }
  }));

mongoose.connect(process.env.DB_URI);
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected to database ...!')
  });



//connect flash
// app.use((req, res, next) => {
//   res.locals.messages = req.flash();
//   next();
// })



//Import routers
const AuthRoutes = require('./routes/auth.router');
const AdminRoutes = require('./routes/admin.router');
const BannerRoutes = require('./routes/banner.router');
const UserRoutes = require('./routes/user.router');
const ServiceRoutes = require('./routes/service.router');
const CustomerRoutes = require('./routes/customer.router');
const ProjectRoutes = require('./routes/project.router');
const ProductRoutes = require('./routes/product.router');
const BlogRoutes = require('./routes/blog.router');
const JobRoutes = require('./routes/job.router');
const VolentearRoutes = require('./routes/volentear.router');
const EmployeeRoutes = require('./routes/employee.router');


app.use('/auth', AuthRoutes);
app.use('/admin', AdminRoutes);
app.use('/admin/banners', BannerRoutes);
app.use('/admin/users', UserRoutes);
app.use('/admin/services', ServiceRoutes);
app.use('/admin/customers', CustomerRoutes);
app.use('/admin/projects', ProjectRoutes);
app.use('/admin/products', ProductRoutes);
app.use('/admin/blogs', BlogRoutes);
app.use('/admin/jobs', JobRoutes);
app.use('/admin/volentears', VolentearRoutes);
app.use('/admin/employees', EmployeeRoutes);


//Home Router
const HomeRoutes = require('./routes/home.router');


app.use('/', HomeRoutes);

//Handle Error
app.use((req, res, next) => {
  next(createHttpError.NotFound());
})

app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status);
  res.send(error);
})

module.exports = app;