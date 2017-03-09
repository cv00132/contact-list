const Contact = require("../models").Contacts;


module.exports = {
  // Add your routes here
  create (req, res) {
    Contact.create({
      name: req.body.name,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      photo_url: req.body.photo_url,
      email: req.body.email
    })
      .then(contact => res.status(201).send(contact))
      .catch(error => res.status(400).send(error));
  },

  listAll (req, res) {
      Contact.findAll()
      .then(contact => res.status(201).send(contact))
      .catch(error => res.status(400).send(error));
  },

  listOne (req, res) {
      Contact.findById(req.params.id)
      .then(contact => res.status(201).send(contact))
      .catch(error => res.status(400).send(error));
  },

  update (req, res) {
    Contact.findById(req.params.id)
      .then(contact => {
        contact.update(req.body, {
          fields: ['name', 'phone', 'city', 'state','photo_url','email'],
          where: {
            id: req.params.id
          }
        })
          .then(contact => res.status(201).send(contact))
          .catch(error => res.status(400).send(error));
      });
  },

  delete (req, res) {
    Contact.findById(req.params.id)
    .then(contact => {
        contact.destroy(req.body, {
            fields: ['name', 'phone', 'city', 'state','photo_url','email'],
            where: {
                id: req.params.id
            }
        })
       })
  .then(contact => res.status(201).send({message: 'Contact successfully deleted'}))
  .catch(error => res.status(400).send(error));
}

};
