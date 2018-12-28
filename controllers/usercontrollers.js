var User=require('../models').User

module.exports = {
    list(req, res) {
      return User
        .findAll(
          {
            order: [
              ['createdAt', 'DESC'],
              [{ model: User, as: 'users' }, 'createdAt', 'DESC'],
            ],
          }
        )
        .then((users) => res.status(200).send(users))
        .catch((error) => { res.status(400).send(error); });
    },
  
    getById(req, res) {
      return User
        .findById(req.params.id)
        .then((users) => {
          if (!users) {
            return res.status(404).send({
              message: 'Users Not Found',
            });
          }
          return res.status(200).send(users);
        })
        .catch((error) => res.status(400).send(error));
    },
  
    add(req, res) {
        console.log(req.body.username);
      return User
        .create({
            nombre: req.body.nombre,
            email: req.body.email,
            pass: req.body.pass,
            username: req.body.username,
        })
        .then((users) => res.status(201).send(users))
        .catch((error) => res.status(400).send(error));
    },
  
    update(req, res) {
      return User
        .findById(req.params.id)
        .then(users => {
          if (!users) {
            return res.status(404).send({
              message: 'Classroom Not Found',
            });
          }
          return users
            .update({
              class_name: req.body.class_name || classroom.class_name,
              nombre: req.body.nombre || users.nombre,
              email: req.body.email || users.email,
              pass: req.body.pass || users.pass,
              username: req.body.username || users.username,
            })
            .then(() => res.status(200).send(users))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  
    delete(req, res) {
      return User
        .findById(req.params.id)
        .then(users => {
          if (!users) {
            return res.status(400).send({
              message: 'Classroom Not Found',
            });
          }
          return users
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  };