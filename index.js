function signup(username) {
  const usernames = ["user1", "user2", "user3"];

  if (usernames.includes(username)) {
    return "User Already Registered, Please Login";
  } else {
    usernames.push(username);
    return "Signup Successful, Please Login";
  }
}

function login(username, password) {
  const usernames = ["user1", "user2", "user3"];

  if (usernames.includes(username)) {
    if (password === "Emp@123") {
      return "Login Successful";
    } else {
      return "Wrong Password";
    }
  } else {
    return "User Not Found, Please Signup";
  }
}
