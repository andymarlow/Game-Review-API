exports.pingApi = (req, res) => {
  res.status(200).send({ message: "Server says hi" });
};
