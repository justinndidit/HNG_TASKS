const express = require("express");
const app = express();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Data = [
  {
    slack_name: "Olasoji Favour",
    current_day: daysOfWeek[new Date().getDay()],
    utc_time: new Date().toISOString().slice(0, -5) + "Z",
    track: "backend",
    github_file_url:
      "https://github.com/justinndidit/HNG_TASKS/blob/main/task_1/server.js",
    github_repo_url: "https://github.com/justinndidit/HNG_TASKS",
    status_code: 200,
  },
];

const PORT = 8000;

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  const userData = Data.find(function (data) {
    return (
      data.slack_name.toLowerCase().split(" ").join("_") === slack_name &&
      data.track === track
    );
  });

  res.status(200).json(userData);
});
app.use("*", (req, res) => {
  res.status(404).send(`Route ${req.url} not found`);
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
