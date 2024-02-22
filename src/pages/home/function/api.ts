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

export const getAverageUser = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense/average/",
    null,
    null,
    true
  );

  return result.data;
};

export const getTotalExpense = async () => {
  const resultWeek = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense/",
    {
      type: "week",
    },
    null,
    true
  );

  const resultYear = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense",
    {
      type: "year",
    },
    null,
    true
  );

  return {
    week: resultWeek.data,
    year: resultYear.data,
  };
};

export const getLastExpense = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/expense/",
    {
      limit: 10,
    },
    null,
    true
  );

  for (const row of result.data) {
    row.data = new Date(row.data);
  }

  return result.data;
};
