const courses = [
  {
    title: 'Event Driven Cakes',
    cost: 50,
  },
  {
    title: 'Asynchronous Artichoke',
    cost: 25,
  },
  {
    title: 'Object Oriented Orange Juice',
    cost: 10,
  },
];

exports.home = (req, res) => {
  res.render('index');
};

exports.showCourses = (req, res) => {
  res.render('courses', { offeredCourses: courses });
};
