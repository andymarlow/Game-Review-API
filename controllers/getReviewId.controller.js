const { selectReviewId } = require(`../models/selectReviewId.model`);

exports.getReviewId = (req, res, next) => {
  selectReviewId(req.params.review_id)
    .then((review) => {
      res.status(200).send({ review: review });
    })
    .catch(next);
};
