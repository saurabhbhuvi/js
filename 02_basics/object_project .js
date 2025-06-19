// Defines 3 user profiles (as objects)

// Each user has:  id, name, email
// A nested profile object with age, hobbies (array), and location
// Push all users into an array called userDatabase

// Write logic to:

// 🔍 Print names of users whose age is above 20
// 🎯 Print hobby list of the second user
// 🧠 Check if every user has a location in their profile
// 🔐 Freeze one user and try changing their email

const users = [
  {
    id: 1,
    name: "saurabh1",
    email: "saurabh1@gamil.com",
    profile: {
      age: 22,
      hobbies: ["cricket", "coding", "security Engineer"],
      location: "USA",
    },
  },
  {
    id: 2,
    name: "saurabh2",
    email: "saurabh2@gamil.com",
    profile: {
      age: 19,
      hobbies: ["cricket", "coding", "security Engineer"],
      location: "INDIA",
    },
  },
  {
    id: 3,
    name: "saurabh3",
    email: "saurabh3@gamil.com",
    profile: {
      age: 26,
      hobbies: ["cricket", "hockey", "coding", "security Engineer"],
      location: null,
    },
  },
  {
    id: 43,
    name: "saurabh3",
    email: "saurabh3@gamil.com",
    profile: {
      age: 26,
      hobbies: ["cricket", "hockey", "coding", "security Engineer"],
      location: "",
    },
  },
];

const userDatabase = [];

users.forEach((users) => {
  userDatabase.push(users);
});

console.log(userDatabase, "userDatabase");

// Print names of users whose age is above 20

userDatabase.forEach((users) => {
  if (users.profile.age > 20) {
    console.log(
      `User Name: ${users.name.toUpperCase()},Age: ${users.profile.age}`
    );
  }
});

// Print hobby list of the second user

console.log(
  `Hobby list of Second User: ${users[1].profile.hobbies.join(" | ")}`
);

// Check if every user has a location in their profile

const hasLocation = userDatabase.every(
  (users) =>
    users.profile.location !== undefined && users.profile.location !== ""
);

console.log(
  hasLocation
    ? "All users have a location in their profile."
    : "Not all users have a location in their profile."
);

userDatabase.forEach((users, index) => {
  if (!users.profile.location) {
    console.log(
      `❌ User with ID ${users.id} (${users.name}) does NOT have a valid location.`
    );
  }
});

// // Freeze one user and try changing their email
// const userToFreeze = userDatabase[0];
// Object.deepFreeze(userToFreeze);
// userToFreeze.email = "sausjasasj@gamil.com"; // Attempt to change email
// console.log(
//   userToFreeze.email
//     ? `Email changed to: ${userToFreeze.email}`
//     : "Email change failed, object is frozen."
// );
