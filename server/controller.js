getInfo = (req, res) => {
  const db = req.app.get('db');

  db.get_info()
    .then(info => res.status(200).json(info))
    .catch(err => console.log(err));
};

addInfo = (req, res) => {
  const db = req.app.get('db');
  const { property_name, adress, city, state, zip } = req.body;

  db.add_info(property_name, adress, city, state, zip)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err));
};

deleteInfo = (req, res) => {
  const { id } = req.params;
  const db = req.app.get('db');

  db.delete_info(id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err));
};

editInfo = (req, res) => {
  const { property_name, adress, city, state, zip } = req.body;
  const { id } = req.params;
  const db = req.app.get('db');

  db.update_info(id, property_name, adress, city, state, zip)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err));
};

module.exports = {
  getInfo,
  addInfo,
  deleteInfo,
  editInfo
};
