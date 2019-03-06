import Link from '../models/Link';

// const _ = require('underscore')

exports.postLink = async (req, res, next) => {
  const link = new Link({
    title: req.body.title,
    image: req.file.filename
  });

  link.save()
    .then(link => console.log('link saved: ' + link))
    .catch(console.error);
};
