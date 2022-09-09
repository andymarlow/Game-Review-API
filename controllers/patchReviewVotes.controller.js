const { editReviewVotes } = require(`../models/editReviewVotes.model`);

exports.patchReviewVotes = (req, res, next) => {
  const reviewId = req.params.review_id;
  const inc_votes = req.body.inc_votes;
  editReviewVotes(inc_votes, reviewId)
    .then((updatedReview) => res.status(200).send({ updatedReview }))
    .catch(next);
};
