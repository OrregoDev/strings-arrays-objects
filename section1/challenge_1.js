// Username generator

const domainName = 'myDomain.com';
const users = [];
while (true) {
  const fullName = prompt('Enter your full name').toLowerCase();
  if (fullName.length < 2) {
    alert('Name must be at least 3 characters long');
    continue;
  }

  let splittedName = fullName.split(' ');

  if (splittedName.length !== 2) {
    alert('Please enter your first and last name');
  } else {
    let firstThreeLettersFirstName = splittedName[0].slice(0, 3);
    let firstThreeLetersLastName = splittedName[1].slice(0, 3);
    let usernameToCheck = firstThreeLettersFirstName + firstThreeLetersLastName;
    const userKeys = Object.keys(users);
    let counter = 0;
    userKeys.forEach((username) => {
      let semiMatch = '';
      for (let i = 0; i < username.length; i++) {
        semiMatch = semiMatch + username[i];
        if (semiMatch === usernameToCheck) {
          counter++;
        }
      }
    });

    if (counter) {
      usernameToCheck += counter;
    }
    const userEmail = `${username}@${domainName}`;
    Object.assign(users, {
      [username]: userEmail,
    });
    console.log(users);

    if (!confirm('Would you like to add another user?')) break;
  }
}
