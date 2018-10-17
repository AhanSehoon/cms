const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || 3000;

const ExpressApp = express();
const NextApp = next({
  dev, // 개발 모드인지 프로덕션인지에 대한 플래그 (true / false)
  quiet: dev,
  dir: 'next-app-dir', // Next 프로젝트 파일이 위치한 디렉토리, 기본 값은 현재 디렉토리 값임('.')
  conf: { // next.config.js 에서 사용하는 객체 값
    webpack: {}
  }
})
const NextHandler = NextApp.getRequestHandler();

const CustomRouter = require('./routes');
const NextRouter = express.Router();

NextRouter.get('/code/manage', (req, res) => {
    const result = {
        'SOME RESULT': 'CODE'
    };
    res.result = result;

    return NextApp.render(req, res, 'route-b', Object.assign({}, req.query, req.param))
});
NextRouter.get('/menu/manage', (req, res) => {
  const result = {
    'SOME RESULT': 'MENU'
  };
  res.result = result;

  return NextApp.render(req, res, 'route-b', Object.assign({}, req.query, req.param))
});
NextRouter.get('*', (req, res) => NextHandler(req, res));

NextApp
  .prepare()
  .then(() => {
    ExpressApp.use(/* SOME MIDDLEWARE 1 */);
    ExpressApp.use(/* SOME MIDDLEWARE 2 */);
    ExpressApp.use('/', CustomRouter);

    ExpressApp.use('/next-app', NextRouter);

    ExpressApp.listen(PORT, err => {
      if (err) throw err;
      console.log(`Listening on ::${PORT}`);
    })
  });