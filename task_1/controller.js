const Data = require("./data");
const getUsers = function (req, res) {
  const { slack_name, track } = req.query;

  if (!slack_name || !track) {
    return res.json({ Data });
  }

  const resData = Data.find(function (data) {
    return (
      data.slack_name.toLowerCase().split(" ").join("_") === slack_name &&
      data.track === track
    );
  });

  res.json({ resData });
};

module.exports = getUsers;
