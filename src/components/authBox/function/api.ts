export const getAuthUser = (id: any) => {
  console.log("Sono dentro la funzione");
  return [
    {
      name: "Dashboard",
      description: "Schermata di visualizzazione utente di tipo admin",
      value: true,
      id: 1,
    },
    {
      name: "Homepage",
      description: "Visualizzazione proprie statistiche",
      value: true,
      id: 2,
    },
    {
      name: "Log",
      value: false,
      id: 3,
    },
    {
      name: "Impostazioni/Utenti",
      value: true,
      id: 4,
    },
    {
      name: "Impostazioni/Autorizzazioni",
      value: true,
      id: 5,
    },
  ];
};
