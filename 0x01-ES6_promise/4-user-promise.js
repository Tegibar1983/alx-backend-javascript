function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName
  });
}

signUpUser("John", "Doe")
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.error(error);
  });
