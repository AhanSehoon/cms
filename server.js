const express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

let models = require("./models/index.js");
 
models.sequelize.sync().then( () => {
  console.log(" DB 연결 성공")
}).catch(err => {
  console.log("연결 실패")
  console.log(err)
})

//logger
var logger = require('morgan');

const login = require('./server/routes/login.js');
const code = require('./server/routes/code.js');

app.prepare().then(() => {
  const server = express();

  server.use(logger('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());
  server.use(express.static(path.join(__dirname, '..', 'public/')));

  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //server.use(bodyParser.json());
  server.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));
  
  server.use('/', login);
  server.use('/common', code);
  // Server-side
  const route = pathMatch();

  //server user 만으로도 통신이 가능하나 아래 부분은 서버 내에서 작업할 때 필요
  //java로 비교하면 일단 컨트롤러를 태우는 것과 비슷
  server.get('/', (req, res) => {
    console.log(res.body);
    //로그인 체크 후 페이지 아동
    return app.render(req, res, '/login/manage', req.query);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Check out the app at http://localhost:3000');
  });
});
