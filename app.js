const { TypeDB, SessionType } = require("typedb-client");
const readCSV = require("./import.js");
const csvFilePath = "./data/contacts.csv";

async function openSession(database) {
  const session = await TypeDB.session(database, SessionType.DATA);
  return session;
}

openSession("contacts")
  .then(async (session) => {
    // Utilisez la session pour effectuer des opérations sur Typedb

    await session.close();
  })
  .catch((error) => {
    console.error("Erreur lors de l'ouverture de la session Typedb :", error);
  });

readCSV(csvFilePath)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erreur lors de la lecture du fichier CSV :", error);
  });
