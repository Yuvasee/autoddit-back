import Link from '../models/Link';

exports.postLink = (req, res) => {
  const link = new Link({
    title: req.body.title,
    image: req.file.filename,
    user: req.body.user
  });

  link.save()
    .then(link => {
      console.log('link saved: ' + link);
      res.status(200).send(link)
    })
    .catch(console.error);
};

exports.listLinks = (req, res, next) => {
  Link.find({}, (err, links) => {
    if (err) {
      next(err);
    }
    console.log('links sent: ' + links);
    res.status(200).send(links);
  });
};
