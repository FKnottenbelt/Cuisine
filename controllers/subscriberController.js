const Subscriber = require('../models/subscriber');

exports.showSignUp = (req, res) => {
  res.render('contact');
};

exports.postedSignUpForm = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipcode,
  });

  newSubscriber.save()
    .then(() => {
      res.render('thanks');
    })
    .catch(error => {
      res.send(error);
    });
};

exports.getAllSubscribers = (req, res) => {
  Subscriber.find({})
    .exec()
    .then((subscribers) => {
      res.render('subscribers', { subscribers });
    })
    .catch((error) => {
      console.log(error.message);
      return [];
    });
};
