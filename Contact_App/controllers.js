const Contact = require("./Contact");

exports.getAllContact = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.render("index", { contacts, error: {} });
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
  let { name, phone, email, id } = req.body;
  let contact = new Contact({ name, email, phone });

  let error = {};

  if (!name) {
    error.name = "Please Provide a Name";
  }
  if (!phone) {
    error.phone = "Please provide a Phone";
  }
  if (!email) {
    error.email = "Please provide a Email";
  }

  let isError = Object.keys(error).length > 0;

  if (isError) {
    Contact.find()
      .then((contacts) => {
        return res.render("index", { contacts, error });
      })
      .catch((e) => {
        console.log(e);
        return res.json({ message: "Error Occured" });
      });
  }
  let contacts = new Contact({
    name,
    email,
    phone,
  });
  contact.save().then((c) => {
    Contact.find()
      .then((contacts) => {
        return res.render("index", { contacts, erro: {} });
      })
      .catch((e) => {
        console.log(e);
        return res.json({ message: "Error Occured" });
      });
  });
};

exports.updateContact = (req, res) => {
  let { name, phone, email } = req.body;
  let { id } = req.params;

  Contact.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        email,
        phone,
      },
    },
    { new: true }
  )
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({ message: "Error Occured" });
    });
};

exports.deleteContact = (req, res) => {
  let { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({ message: "Error Occurred" });
    });
};
