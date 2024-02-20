import { gestioneSnackbar, ws } from "../../../../../utils/common";
import {
  isValidEmail,
  isValidPhoneNumber,
} from "../../../../../utils/validation";

export const userInfo = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/user/",
    null,
    null,
    true
  );

  return result.data;
};

export const saveUserInfo = async ({
  nome,
  cognome,
  email,
  telefono,
  img,
}: any) => {
  if (!nome || !cognome || !email || !telefono) {
    gestioneSnackbar(true, "Inserisci tutti i dati", "error");
    return false;
  }

  if (!isValidEmail(email)) {
    gestioneSnackbar(true, "Inserisci email valida", "error");
    return false;
  }

  if (!isValidPhoneNumber(telefono)) {
    gestioneSnackbar(true, "Inserisci telefono valido", "error");
    return false;
  }
  const result = await ws(
    "PUT",
    process.env.VITE_API_URL + "/user/",
    null,
    {
      nome,
      cognome,
      email,
      telefono,
      img,
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
};
