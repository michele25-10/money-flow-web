import { gestioneSnackbar, ws } from "../../../utils/common";
import { isValidDate } from "../../../utils/validation";

export const getAllElement = async () => {
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/expense/",
    null,
    null,
    true
  );

  if (result.error) {
    gestioneSnackbar(true, result.data.message, "error");
  } else {
    for (const rows of result.data) {
      rows["data"] = new Date(rows["data"]);
    }
    return result.data;
  }
};

export const editElement = async ({
  id,
  luogo,
  date: data,
  importo,
  descrizione,
  tipoPagamento,
  categoria,
  documento,
}: any) => {
  if (
    !luogo ||
    !data ||
    !importo ||
    tipoPagamento === "" ||
    !categoria ||
    !id
  ) {
    gestioneSnackbar(true, "Inserisci i dati obbligatori", "error");
    return false;
  }

  if (!isValidDate(data)) {
    gestioneSnackbar(true, "Inserisci una data valida", "error");
    return false;
  }

  const result = await ws(
    "PUT",
    process.env.VITE_API_URL + "/expense/" + id,
    null,
    {
      luogo,
      data,
      importo,
      descrizione,
      tipoPagamento,
      categoria,
      documento,
    },
    true
  );

  console.log(result);

  if (result.error) {
    gestioneSnackbar(true, result.data.message, "error");
    return false;
  } else {
    gestioneSnackbar(true, result.data.message, "success");
    return true;
  }
};

export const deleteElement = async (id: number) => {
  if (!id) {
    gestioneSnackbar(true, "Errore interno al server", "warning");
    return false;
  }

  const result = await ws(
    "DELETE",
    process.env.VITE_API_URL + "/expense/" + id,
    null,
    null,
    true
  );

  if (result.error) {
    gestioneSnackbar(true, result.data.message, "error");
    return false;
  } else {
    gestioneSnackbar(true, "Spesa eliminata!", "success");
    return true;
  }
};

export const addElement = async ({
  luogo,
  date: data,
  importo,
  descrizione,
  tipoPagamento,
  categoria,
  documento,
}: any) => {
  if (!luogo || !data || !importo || tipoPagamento === "" || !categoria) {
    gestioneSnackbar(true, "Inserisci i dati obbligatori", "error");
    return false;
  }

  if (!isValidDate(data)) {
    gestioneSnackbar(true, "Inserisci una data valida", "error");
    return false;
  }

  const result = await ws(
    "POST",
    process.env.VITE_API_URL + "/expense/",
    null,
    {
      luogo,
      data,
      importo,
      descrizione,
      tipoPagamento,
      categoria,
      documento,
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

export const getAllCategory = async () => {
  console.log("Sono qua dentro");
  const result = await ws(
    "GET",
    process.env.VITE_API_URL + "/category/",
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
