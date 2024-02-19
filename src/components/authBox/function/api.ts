import { ws } from "../../../utils/common";

export const getAuthUser = async (id: any) => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/authorization/user/",
    null,
    null,
    true
  );

  return result.data;
};

export const editAuthUser = (id: any, value: any, idu: any) => {
  console.log("Modificata: id " + id + " value " + value + " idu " + idu);
  return;
};
