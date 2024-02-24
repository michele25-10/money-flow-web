import { authList } from "./enum";
import { useGlobalState } from "./state";

export const isMobileDevice = () => {
  const mobileScreenWidth = 768;
  if (window.innerWidth <= mobileScreenWidth) {
    return true;
  } else {
    return false;
  }
};

export const isAuthorised = (idAuth: number) => {
  const authorization: any = useGlobalState("auth");
  const dev: any = useGlobalState("dev");

  const noMobileView = [
    authList.log,
    authList.configurazione,
    authList.autorizzazioni,
  ];

  if (!dev[0]) {
    if (idAuth === authList.log) {
      return {
        value: false,
        message: "Non hai i permessi!",
        path: "../login",
      };
    }
    for (const row of authorization[0]) {
      if (row.id === idAuth) {
        if (!row.valore) {
          return {
            value: false,
            message: "Non hai i permessi!",
            path: "../login",
          };
        }
      }
    }
  }

  if (isMobileDevice()) {
    for (const id of noMobileView) {
      if (idAuth === id) {
        return {
          value: false,
          message: "Pagina visualizzabile solo da PC",
          path: "../",
        };
      }
    }
  }

  return { value: true };
};
