import { gestioneSnackbar, ws } from "../../../utils/common";

export const getAllLog = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/log/",
    null,
    null,
    true
  );

  if (result.error) {
    gestioneSnackbar(true, result.data.message, "error");
    return;
  } else {
    return result.data;
  }
};
