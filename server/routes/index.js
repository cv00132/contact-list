// Require your controllers here
const ContactController = require('../controllers/contacts');


module.exports = (app) => {
  // Add your routes here
  app.post('/contacts', ContactController.create);
  app.get('/contacts', ContactController.listAll);
  app.get('/contacts/:id', ContactController.listOne);
  app.put('/contacts/:id', ContactController.update);
  app.delete('/contacts/:id', ContactController.delete);

};
