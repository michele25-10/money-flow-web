import { gestioneSnackbar, ws } from "../../../../../utils/common";
import { isValidPassword } from "../../../../../utils/validation";

export const changePasswordWS = async ({
  oldPassword,
  newPassword,
  confirmPassword,
}: any) => {
  if (
    !isValidPassword(oldPassword) ||
    !isValidPassword(newPassword) ||
    !isValidPassword(confirmPassword)
  ) {
    gestioneSnackbar(true, "Password non rispetta criteri minimi", "error");
    return false;
  }

  const res = await ws(
    "PUT",
    process.env.VITE_API_URL + "/auth/change-password",
    null,
    {
      oldPassword,
      newPassword,
      confirmPassword,
    },
    true
  );

  if (res.error) {
    gestioneSnackbar(true, res.data.message, "error");
    return false;
  } else {
    gestioneSnackbar(true, res.data.message, "success");
    return true;
  }
};
