const current = new Date();//returns a string representation of the current date and time
console.log("Current Date and Time :",current);

// What is the year today?
const yearToday = current.getFullYear();//Returns the year of the specified date according to local time.
console.log("Year Today :",yearToday);

// What is the month today as a number?
const monthToday = current.getMonth();//returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
console.log("Month Today :",monthToday);

// What is the date today?
const dateToday = current.getDate(); //Returns the day of the month (1 – 31) for the specified date according to local time.
console.log("Date Today :",dateToday);

// What is the day today as a number?
const dayToday = current.getDay();//Returns the day of the week (0 – 6) for the specified date according to local time.
console.log("Day Today :",dayToday);

// What is the hours now?
const hoursNow = current.getHours(); //Returns the hour for the specified date, according to local time.
console.log("Hours Now :",hoursNow);

// What is the minutes now?
const minutesNow = current.getMinutes(); //Returns the hour for the specified date, according to local time.
console.log("Minutes Now :",minutesNow);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const msec = Date.now();//Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
console.log("Milliseconds Elapsed from 1 Jan 1970 :",msec);
console.log("Seconds Elapsed from 1 Jan 1970 :",(msec*0.001));

