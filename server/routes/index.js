// Require your controllers here
const ContactController = require('../controllers/contacts');



module.exports = (app) => {

//Allows frontend to communicate to the backend
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // Add your routes here
  app.post('/contacts/add', ContactController.create);
  app.get('/contacts', ContactController.listAll);
  app.get('/contacts/:id', ContactController.listOne);
  app.put('/contacts/:id', ContactController.update);
  app.delete('/contacts/:id', ContactController.delete);
};
