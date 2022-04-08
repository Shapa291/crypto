import axios from "axios";
import { IUserData } from "./Interfaces";

const URL = "http://localhost:8080/users/";

export async function RegisterUserInDataBase({ email, password }: IUserData) {
  const response = axios.post(URL, {
    email: email,
    password: password,
  });
  return response;
}

export async function SignUserInDataBase({ email, password }: IUserData) {
  const response = axios.post(URL + "login", {
    email: email,
    password: password,
  });
  return response;
}
