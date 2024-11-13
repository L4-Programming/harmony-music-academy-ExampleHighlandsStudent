export function displayErrors(errors) {
  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement) {
      inputElement.classList.add("error-input");
    }
    if (labelElement) {
      labelElement.classList.add("error-label");
    }

    // Populate the error message div with an unordered list of error messages
    let errorDiv = document.querySelector(`#${field}-error`);
    if (errorDiv) {
      errorDiv.classList.add("error-message");
      let ul = document.createElement("ul");
      errors[field].messages.forEach((message) => {
        let li = document.createElement("li");
        li.textContent = message;
        ul.appendChild(li);
      });
      errorDiv.innerHTML = ""; // Clear any existing content
      errorDiv.appendChild(ul);
    }
  }
}

export function validateForm({ userEmail, userLevel, userHours }) {
  const maxHoursPerLevel = {
    basic: 5,
    advanced: 10,
  };

  // Validation logic here
  let errors = {};

  // Helper function to add error messages
  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }

  // Check if the user has provided an email address
  if (userEmail === "") {
    addError("email", "Please enter your email address.");
  }

  // Check if the user has selected a level
  if (userLevel === "") {
    addError("level", "Please select a level of study");
  }

  // Check if the user has specified at least one hour of study
  if (isNaN(userHours) || userHours < 1) {
    addError("hoursPerWeek", "Please enter at least one hour of tuition.");
  }

  // Is userLevel valid?
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    addError("level", "Invalid level of study selected.");
  }

  // Is userHours within range?
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    addError(
      "hoursPerWeek",
      `You can only study a maximum of ${maxAllowedHours} hours per week.`
    );
  }

  // Return early if there are any errors
  if (Object.keys(errors).length > 0) {
    displayErrors(errors);

    return false;
  }

  return {
    userEmail,
    userLevel,
    userHours: parseInt(userHours),
  };
}