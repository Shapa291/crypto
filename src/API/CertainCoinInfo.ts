import axios from "axios";

const URLofCertainCoins = "http://localhost:8080/detail/";
const token: any = localStorage.getItem("token");

export async function GetCoinsTypesWhichAreAvailable() {
  const response = await axios.get(URLofCertainCoins + "types", {
    headers: {
      token: token,
    },
  });
  return response;
}

export async function GetCertainCoinByType(coinId: string) {
  const response = await axios.get(URLofCertainCoins + `certain/${coinId}`, {
    headers: {
      token: token,
    },
  });
  return response;
}
