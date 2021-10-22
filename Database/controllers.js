const Contact = require("./Contact");

exports.getAllContact = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((e) => {
      console.log(e);
      res.json({ message: "Error Occured" });
    });
};

exports.getSingleContact = (req, res) => {
  let { id } = req.params;
  Contact.findById(id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({ message: "Error Occured" });
    });
};

exports.createContact = (req, res) => {
  let { name, phone, email } = req.body;
  let contact = new Contact({ name, email, phone });
  contact.save();
};

exports.updateContact = (req, res) => {};

exports.deleteContact = (req, res) => {};
