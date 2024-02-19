import { ws } from "../../../utils/common";

export const getAllUserFamily = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/user/family/",
    null,
    null,
    true
  );
  let response = [];
  for (const row in result.data) {
    response.push({
      name_surname: result.data[row].nome + " " + result.data[row].cognome,
      email: result.data[row].email,
      img: result.data[row].img ? result.data[row].img : null,
      id: result.data[row].id,
    });
  }
  return response;
};
