const Subscriber = require('../models/subscriber');

exports.showSignUp = (req, res) => {
  res.render('contact');
};

exports.postedSignUpForm = (req, res) => {
  res.render('thanks');
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
