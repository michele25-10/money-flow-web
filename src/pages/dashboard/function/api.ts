import { ws } from "../../../utils/common";

export const getDataCategory = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/category/",
    {
      dashboard: true,
    },
    null,
    true
  );

  return result.data;
};

export const getAverageUser = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense/average/",
    {
      dashboard: true,
    },
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
      dashboard: true,
    },
    null,
    true
  );

  const resultYear = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense",
    {
      type: "year",
      dashboard: true,
    },
    null,
    true
  );

  return {
    week: resultWeek.data,
    year: resultYear.data,
  };
};

export const getFamilyExpensePieChart = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense/family",
    null,
    null,
    true
  );

  return result.data;
};

export const getAnalyseExpenseFamily = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense/analyse",
    null,
    null,
    true
  );

  return result.data;
};

export const getTotalFamilyExpenseCategory = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/user/",
    null,
    null,
    true
  );

  return result.data;
};
