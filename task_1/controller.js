const Data = require("./data");
const getUsers = function (req, res) {
  const { slack_name, track } = req.query;

  if (!slack_name || !track) {
    Data.forEach((data) => getDay(data));
    return res.json({ Data });
  }

  const userData = Data.find(function (data) {
    return (
      data.slack_name.toLowerCase().split(" ").join("_") === slack_name &&
      data.track === track
    );
  });
  getDay(userData);

  res.json({ userData });
};

function getDay(data) {
  switch (data.current_day) {
    case 0:
      data.current_day = "Sunday";
      break;
    case 1:
      data.current_day = "Monday";
      break;
    case 2:
      data.current_day = "Tuesday";
      break;
    case 3:
      data.current_day = "Wednesday";
      break;
    case 4:
      data.current_day = "Thursday";
      break;
    case 5:
      data.current_day = "Friday";
      break;
    case 5:
      data.current_day = "Saturday";
      break;
    default:
      data.current_day = "today";
      break;
  }
}
module.exports = getUsers;
