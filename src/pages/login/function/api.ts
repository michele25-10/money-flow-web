import { deleteCookie, setCookie } from "../../../utils/cookie";
import { ws, gestioneSnackbar } from "../../../utils/common";
import { isValidPassword, isValidEmail } from "../../../utils/validation";
import { setGlobalState } from "../../../utils/state";

export const loginWS = async (
  famiglia: string,
  email: string,
  password: string,
  ricordami: boolean
) => {
  if (famiglia || email || password) {
    if (!isValidPassword(password)) {
      gestioneSnackbar(
        true,
        "La password non soddisfa i criteri standard",
        "error"
      );
      return false;
    }

    if (!isValidEmail(email)) {
      gestioneSnackbar(true, "Email non valida", "error");
      return false;
    }

    const res = await ws(
      "POST",
      process.env.VITE_API_URL + "/auth/login",
      null,
      {
        famiglia: famiglia.toLowerCase(),
        email,
        password,
        ricordami,
      },
      false
    );

    if (res.error) {
      gestioneSnackbar(true, res.data.message, "error");
      return false;
    } else {
      setGlobalState("auth", res.data.auth);
      setGlobalState("dev", res.data.dev ? res.data.dev : false);
      sessionStorage.setItem("accessToken", res.data.accessToken);
      sessionStorage.setItem("name", res.data.name);
      if (ricordami) {
        setCookie("ricordami", res.data.ricordami, 14);
      } else {
        deleteCookie("ricordami");
      }

      return true;
    }
  } else {
    gestioneSnackbar(true, "Mancano campi dati", "error");
    return false;
  }
};
