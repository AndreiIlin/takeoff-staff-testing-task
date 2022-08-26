const isAuth = true;
const token = 1234;

module.exports = (req, res, next) => {
  // console.log(req);
  isAuth ? next() : res.sendStatus(401);
}
