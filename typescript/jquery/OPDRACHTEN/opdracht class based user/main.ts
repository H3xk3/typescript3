import User from "./User";

// Creating two instances of User
const user1 = new User("John", "Doe", "john.doe@example.com");
const user2 = new User("Jane", "Smith", "jane.smith@example.com");

// Testing methods
user1.showUserInfo();
user2.showUserInfo();

console.log("getFullName");
console.log(user1.getFullName());
console.log("----------");

console.log("Resetting Password");
user2.resetPassword();
console.log("----------");

console.log("Setting Password with invalid format");
user1.setPassword("weak");
console.log("----------");

console.log("Setting Password with valid format");
user1.setPassword("Strong#123");
console.log("----------");

user1.showUserInfo();
user2.showUserInfo();
