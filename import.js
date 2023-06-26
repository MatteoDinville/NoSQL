const fs = require("fs");
const csv = require("csv-parser");

function readCSV(csvFilePath) {
  const results = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", () => {
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

module.exports = readCSV;
