const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const now = new Date().toISOString().slice(0, -5) + "Z";

module.exports = [
  {
    slack_name: "Olasoji Favour",
    current_day: daysOfWeek[new Date().getDay()],
    utc_time: now,
    track: "backend",
    github_file_url:
      "https://github.com/justinndidit/HNG_TASKS/blob/main/task_1/server.js",
    github_repo_url: "https://github.com/justinndidit/HNG_TASKS",
    status_code: 200,
  },
];
