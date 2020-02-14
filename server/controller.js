getInfo = (req, res) => {
  const db = req.app.get('db');

  db.get_info()
    .then(info => res.status(200).json(info))
    .catch(err => console.log(err));
};

module.exports = {
  getInfo
};
