import { ws } from "../../../utils/common";

export const getDataCategory = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/category/",
    null,
    null,
    true
  );

  return result.data;
};
