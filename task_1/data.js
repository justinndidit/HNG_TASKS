const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

module.exports = [
  {
    slack_name: "Olasoji Favour",
    current_day: daysOfWeek[new Date().getDay()],
    utc_time: new Date(),
    track: "backend",
    github_file_url:
      "https://github.com/justinndidit/HNG_TASKS/blob/main/task_1/server.js",
    github_repo_url: "https://github.com/justinndidit/HNG_TASKS",
    status_code: 200,
  },
];
