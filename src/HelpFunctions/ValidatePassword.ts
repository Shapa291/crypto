import { IEqualPasswords } from "./Interfaces";

let checkIfPasswordAreEqual: IEqualPasswords;

checkIfPasswordAreEqual = function (password, email, confirmPassword) {
  let validateState = true;
  if (password === confirmPassword && password !== "" && email !== "" && email.includes('@')) {
   validateState = true;
  } else if(confirmPassword === undefined && password !== "" && email !== "" && email.includes('@')) {
   validateState = true;
  } else {
   validateState = false
  }
  return validateState;
};

export default checkIfPasswordAreEqual;
