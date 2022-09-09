const db = require("../db/connection");

exports.editReviewVotes = (inc_votes, reviewId) => {
  return db
    .query(
      `UPDATE reviews SET votes = votes + $1 WHERE review_id = $2 RETURNING *;`,
      [inc_votes, reviewId]
    )
    .then(({ rows }) => {
      const review = rows[0];
      if (!review) {
        return Promise.reject({
          status: 404,
          msg: "Page/File Not Found",
        });
      }
      return review;
    });
};
