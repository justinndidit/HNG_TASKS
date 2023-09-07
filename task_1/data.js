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
    utc_time: new Date().toISOString().split(".")[0] + "Z",
    track: "backend",
    github_file_url:
      "https://github.com/justinndidit/HNG_TASKS/blob/main/task_1/server.js",
    github_repo_url: "https://github.com/justinndidit/HNG_TASKS",
    status_code: 200,
  },
];

// function formatDate() {
//   // Create a new Date object with the current date and time
//   const currentDate = new Date();

//   // Remove milliseconds
//   currentDate.setMilliseconds(0);

//   // Convert the date to the ISO string format
//   const date = currentDate.toISOString().toString().replace(".000", "");
//   return new Date(date);
// }
