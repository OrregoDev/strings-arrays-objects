// Email validator

let email = prompt('Enter your email');
let emailFormat = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
let isValid = emailFormat.test(email);

if (isValid) {
  alert('The email is valid');
} else {
  alert(
    "Invalid email. Please ensure that: \n- It contains only one '@' symbol.\n- It has at least one '.' after the '@' symbol.\n- The '.' and '@' symbols are not adjacent.\n- It does not contain any whitespace."
  );
}
