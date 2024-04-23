// Username generator

const users = {};
while (true) {
  const fullName = prompt('Please enter your full name').toLowerCase();
  if (!fullName) {
    alert('Please enter your full name');
    continue;
  }
  const splittedName = fullName.split(' ');
  if (splittedName.length < 2 || splittedName.length > 2) {
    console.log('Please enter your first name and your last name');
    continue;
  }

  const initialsName = splittedName[0].slice(0, 3);
  const initialsLastName = splittedName[1].slice(0, 3);
  let username = `${initialsName}${initialsLastName}`;
  let email = `${username}@myDomain.com`;

  const matches = checkUnique(username);
  if (matches > 0) {
    username += matches;
  }
  console.log(username);
  Object.assign(users, {
    [username]: email,
  });
}

function checkUnique(username) {
  const userKeys = Object.keys(users);
  let matches = 0;
  userKeys.forEach((e) => {
    let semiMatch = '';
    for (let i = 0; i < e.length; i++) {
      semiMatch += e[i];
      if (semiMatch === username) {
        matches++;
      }
    }
  });
  return matches;
}
