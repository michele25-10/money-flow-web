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
