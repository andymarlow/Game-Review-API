const db = require("../db/connection");

exports.selectReviewId = (reviewId) => {
  return db
    .query(`SELECT * FROM reviews WHERE review_id = $1;`, [reviewId])
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
