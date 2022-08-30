module.exports = (req, res, next) => {
  if (req.url === '/users') {
    console.log('db', req.app.db.__wrapped__.users);
    console.log('body', req.body);
    const user = req.app.db.__wrapped__.users.find((user) => user.username === req.body.username);
    if (!user || user.password !== req.body.password) {
      return res.sendStatus(401);
    } else {
      return res.status(200).send(user);
    }
  }
  return next();
};

