import { ws } from "../../../utils/common";

export const getDataCategory = async (year: any, dashboard: any) => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/category/",
    {
      year,
      dashboard,
    },
    null,
    true
  );

  return result.data;
};

export const getAverageUser = async (year: any, dashboard: any) => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense/average/",
    {
      year,
      dashboard,
    },
    null,
    true
  );

  return result.data;
};

export const getTotalExpense = async (year: any, dashboard: any) => {
  const resultYear = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense",
    {
      year,
      type: "year",
      dashboard,
    },
    null,
    true
  );

  return {
    year: resultYear.data,
  };
};

export const getFamilyExpensePieChart = async (year: any) => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense/family",
    { year },
    null,
    true
  );

  return result.data;
};

export const getAnalyseExpenseFamily = async (year: any) => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/stats/expense/analyse",
    {
      year,
    },
    null,
    true
  );

  return result.data;
};
