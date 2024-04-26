// Password validator
while (true) {
  let password = prompt('Enter your password');

  let hasMinLength = password.length >= 8;

  let hasNumber = /\d/.test(password);

  let hasLetter = /[a-zA-Z]/.test(password);

  let specialChars = '!@#$%^&*()+=-_}{[]:;"\'?<>,./|\\~`';
  let hasSpecialChar = password
    .split('')
    .some((char) => specialChars.includes(char));

  if (hasMinLength && hasNumber && hasLetter && hasSpecialChar) {
    alert('Safe password');
  } else {
    let conditions = [];
    if (!hasMinLength) conditions.push('at least 8 characters');
    if (!hasNumber) conditions.push('at least a number');
    if (!hasLetter) conditions.push('at least a letter');
    if (!hasSpecialChar) conditions.push('at least a special character');

    alert(
      'This is not a safe password, you must include: ' + conditions.join(', ')
    );
  }
}
