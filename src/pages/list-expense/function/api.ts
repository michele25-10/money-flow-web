import { gestioneSnackbar, ws } from "../../../utils/common";
import { isValidDate } from "../../../utils/validation";

export const editElement = (data: any) => {
  console.log("Modificati i seguenti dati:");
  for (const i in data) {
    console.log(i + ": " + data[i]);
  }
  return;
};

export const deleteElement = (id: number) => {
  console.log("Eliminazione item: " + id);
  return;
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

  console.log(result);

  if (result.error) {
    gestioneSnackbar(true, result.data.message, "error");
    return false;
  } else {
    gestioneSnackbar(true, result.data.message, "success");
    return true;
  }
};
