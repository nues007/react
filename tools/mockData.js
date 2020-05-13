const courses = [];
const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const users = [];

const newUser = {
  id: null,
  farmer: "",
  number: "",
  password: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  //newCourse,
  courses,
  authors,
  newUser,
  users,
};
