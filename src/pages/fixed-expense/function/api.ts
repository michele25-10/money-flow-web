import { ws } from "../../../utils/common";

export const getDataGrid = async (year: number) => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/fixed-expense/",
    { year },
    null,
    true
  );

  return result.data;
};
