const Contact = require("./Contact");

exports.getAllContact = (req, res) => {};

exports.getSingleContact = (req, res) => {};

exports.createContact = (req, res) => {
  let { name, phone, email } = req.body;
  let contact = new Contact({ name, email, phone });
  contact.save();
};

exports.updateContact = (req, res) => {};

exports.deleteContact = (req, res) => {};
