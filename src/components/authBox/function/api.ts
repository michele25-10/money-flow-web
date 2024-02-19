import { gestioneSnackbar, ws } from "../../../utils/common";

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

export const editAuthUser = async (
  id: any,
  value: any,
  idu: any,
  oldValue: any
) => {
  if (oldValue != value) {
    const result = await ws(
      "PUT",
      process.env.VITE_API_URL + "/authorization/user/" + id,
      null,
      {
        valore: value,
        idu,
      },
      true
    );

    if (result.error) {
      gestioneSnackbar(true, result.data.message, "error");
      return false;
    } else {
      gestioneSnackbar(true, result.data.message, "success");
      return true;
    }
  }
};
