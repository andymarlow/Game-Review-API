const db = require("../db/connection");

exports.selectReviewId = (reviewToGet) => {
  return db
    .query(`SELECT * FROM reviews WHERE review_id = $1;`, [reviewToGet])
    .then(({ rows }) => {
      console.log(rows);
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
