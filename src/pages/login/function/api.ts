import { useNavigate } from "react-router-dom";

import { deleteCookie, setCookie } from "../../../utils/cookie";
import { ws, gestioneSnackbar } from "../../../utils/common";

const isPasswordValid = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_+=])[A-Za-z0-9!@#$%^&*()-_+=]{8,}$/;
  return passwordRegex.test(password);
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const loginWS = async (
  famiglia: string,
  email: string,
  password: string,
  ricordami: boolean
) => {
  if (famiglia || email || password) {
    if (!isPasswordValid(password)) {
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
      sessionStorage.setItem("accessToken", res.data.accessToken);
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
