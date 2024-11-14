// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const maxHoursPerLevel = {
    basic: 5,
    advanced: 10,
  };

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  // Store the user's level as userLevel (string/text)
  let userLevel = document.querySelector("#level").value;
  // Store the user's hours of study as userHours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value); // NaN

  // Validate the user's input
  // Check if the user has provided an email address
  if (userEmail === "") {
    alert("Please enter your email address.");

    return;
  }

  if (userLevel === "") {
    alert("Please select a level of study");

    return;
  }

  // Check if the user has specified at least one hour of study
  if (isNaN(userHours) || userHours < 1) {
    alert("Please enter at least one hour of tuition.");

    return;
  }

  // Is userLevel valid?
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    alert("Invalid level of study selected.");

    return;
  }

  // Is userHours within range?
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    alert(`You can only study a maximum of ${maxAllowedHours} hours per week.`);

    return;
  }

  console.log({ userEmail, userLevel, userHours });
});

// Check if the user has provided an email address - have they entered an email?; is this valid?; does it have an '@' symbol?;
// Check if the user has specified at least one hour of study - must be equal to or greater than 1;
// Check if the number of hours requested is within the allowed range - less than or equal to the maximum number for the level
// Calculate the total cost
// Calculate the total cost
// Display the total cost to the user
