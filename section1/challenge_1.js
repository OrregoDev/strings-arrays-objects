// Username generator

const domainName = 'myDomain.com';
const users = [];
while (true) {
  const fullName = prompt('Enter your full name').toLowerCase();

  let splittedName = fullName.split(' ');
  let firstThreeFirstName = splittedName[0].slice(0, 3);
  let firstThreeLastName = splittedName[1].slice(0, 3);
  let username = firstThreeFirstName + firstThreeLastName;
}
