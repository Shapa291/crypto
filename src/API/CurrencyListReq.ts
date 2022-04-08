import axios from "axios";

const URLofLIST = "http://localhost:8080/List/";

export async function GetCryptoCurrencyFromLocalHost() {
  const response = await axios.get(URLofLIST);
  return response;
}
