//1.
function sumSliceArray(arr, first, second) {
  if (
    typeof first !== "number" ||
    typeof second !== "number" ||
    first < 0 ||
    second < 0 ||
    first >= arr.length ||
    second >= arr.length
  ) {
    throw new Error("Invalid indices");
  }
  let sum = arr[first] + arr[second];
  return sum;
}
let arr = [4, 56, 234, 1, 34, 56];

// console.log(sumSliceArray(arr, 15, 3));

try {
  let result = sumSliceArray(arr, 5, 3);
  console.log(result);
} catch (e) {
  console.error("Exception:", e.message);
}

// 2.

function chechAge() {
  try {
    let name = prompt("What's your name?");
    let age = +prompt("How old are you?");
    let status = prompt("Chose your status: admin, moderator,user");

    if (!name || age == undefined || !status) {
      throw new Error("The field is empty! Please enter your age");
    } else if (age < 18 || age > 70) {
      throw RangeError("You are to yang/old");
    }
    age = Number(age);

    if (age != isNaN) {
      throw new TypeError("Age must be a number");
    }
    if (status !== "admin" && status !== "moderator" && status !== "user") {
      throw new EvalError("Status must be admin, moderator, or user");
    }
    alert("Access to watch the movie has been granted!");
  } catch (error) {
    alert(`Error: ${error.name} - ${error.message}`);
  }
}
// chechAge();

// 3.
//

function calcRectangleArea() {
  try {
    let width = +prompt("Enter width");
    let height = +prompt("Enter heigh");
    if (width === NaN || height === NaN) {
      throw new TypeError("Width and height must be numbers");
    }
    let area = width * height;
    return area;
  } catch (error) {
    console.log(`Error - ${error.massage}`);
  }
}

console.log(calcRectangleArea());
// 4.
// 

class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number.");
  }

  return months[month - 1];
}

// 5

function showUser(id) {
  if (id < 0) {
    throw new Error("Invalid user ID: " + id);
  }

  return { id: id };
}

function showUsers(ids) {
  const users = [];

  for (let i = 0; i < ids.length; i++) {
    try {
      const user = showUser(ids[i]);
      users.push(user);
    } catch (error) {
      console.log(error);
    }
  }

  return users;
}

