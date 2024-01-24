"use strict"
function separator(title) {
  console.log("#".repeat(20), title, "#".repeat(20));
}
console.log("\n");

// #################### Create a date #############################

separator("Create a date");
let date1 = new Date(2012, 1, 20, 3, 12, 0);
console.log(date1.toString());
console.log("\n");

// ####################### Show a weekday ##########################

separator("Show a weekday");
function getWeekDay(date) {
  let day = date.getDay();
  return ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][day];
}
let date2 = new Date(2012, 0, 3);  // 3 Jan 2012
console.log(getWeekDay(date2));  // should output "TU"
console.log("\n");

// ###################### European weekday ###########################

separator("European weekday");
function getLocalDay(date) {
  let day = date.getDay();
  if (day === 0) return 7;
  return day;
}
let date3 = new Date(2012, 0, 1);  // 3 Jan 2012
console.log(getLocalDay(date3));
console.log("\n");

// ####################### Which day of month was many days ago? ##########################

separator("Which day of month was many days ago?");
function getDateAgo(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

let date4 = new Date(2015, 0, 2);
console.log(getDateAgo(date4, 1).toString()); // 1, (1 Jan 2015)
console.log(getDateAgo(date4, 2).toString()); // 31, (31 Dec 2014)
console.log(getDateAgo(date4, 365).toString()); // 2, (2 Jan 2014)
console.log("\n");

// ####################### Last day of month? ##########################

separator("Last day of month?");
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1);
  date.setDate(date.getDate() - 1);

  // let date = new Date(year, month + 1, 0); // does the same thing
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1));
console.log("\n");

// ####################### How many seconds have passed today? ##########################

separator("How many seconds have passed today?");
function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());
console.log("\n");

// ######################## How many seconds till tomorrow? #############################

separator("How many seconds till tomorrow?");
function getSecondsToTomorrow() {
  return 24 * 3600 - getSecondsToday();
}

console.log(getSecondsToTomorrow());
console.log("\n");

// ####################### Format the relative date #########################

separator("Format the relative date");
function formatDate(date) {
  function format(num) {
    return ('0' + num).slice(-2);
  }

  let diffInSeconds = Math.trunc((Date.now() - date) / 1000);
  if (diffInSeconds < 1) {
    return "right now";
  } else if (diffInSeconds < 60) {
    return `${diffInSeconds} sec. ago`;
  } else if (diffInSeconds < 3600) {
    return `${Math.round(diffInSeconds / 60)} min. ago`;
  } else {
    return `${format(date.getDate())}.${format(date.getMonth() + 1)}.${format(date.getFullYear() % 100)} ${format(date.getHours())}:${format(date.getMinutes())}`;
  }
}

console.log(formatDate(new Date(new Date - 1))); // "right now"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));
console.log("\n");

