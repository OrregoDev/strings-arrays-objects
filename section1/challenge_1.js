// Username generator

let fullName = prompt('What is your full name?');

fullName = fullName.toLowerCase();

let parts = fullName.split(' ');
let firstName = parts[0].slice(0, 3);
let lastName = parts[1].slice(0, 3);

let username = firstName + lastName;

let email = username + '@myDomain.com';

let users = {};
users[username] = email;

let keys = Object.keys(users);
let exists = keys.includes(username);

if (exists) {
  let i = 1;
  while (keys.includes(username + i)) {
    i++;
  }
  username += i;
  email = username + '@myDomain.com';
  users[username] = email;
}

console.log(users);
