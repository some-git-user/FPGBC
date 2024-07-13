import fs from "fs";

const sortTable = () => {
  // Read the README.md file
  fs.readFile("README.md", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Split the content by lines
    const lines = data.split("\n");

    // Find the start and end of the table
    const tableStart = lines.findIndex((line) =>
      line.startsWith("| Module Name")
    );
    const tableEnd = lines.length - 1;

    if (tableStart === -1 || tableEnd === -1) {
      console.error("Table not found");
      return;
    }

    // Extract the table rows
    const tableRows = lines.slice(tableStart + 1, tableEnd + 1);

    // Parse the rows into an array of objects
    const parsedRowsCompatible = [];
    const parsedRowsIncompatible = [];
    const tableHeader = tableRows.shift();

    tableRows.forEach((row) => {
      const columns = row.split("|").map((col) => col.trim());

      if (columns[1]) {
        if (!columns.includes("❌")) {
          parsedRowsCompatible.push({
            row: row,
            moduleName: columns[1],
          });
        } else {
          parsedRowsIncompatible.push({
            row: row,
            moduleName: columns[1],
          });
        }
      }
    });

    // Sort the rows by the module name
    parsedRowsCompatible.sort((a, b) =>
      a.moduleName?.localeCompare(b.moduleName)
    );
    parsedRowsIncompatible.sort((a, b) =>
      a.moduleName?.localeCompare(b.moduleName)
    );

    // Reconstruct the sorted table
    const sortedTableCompatible = [
      ...parsedRowsCompatible.map((row) => row.row),
    ].join("\n");

    const sortedTableIncompatible = [
      ...parsedRowsIncompatible.map((row) => row.row),
    ].join("\n");

    // Reconstruct the entire file content
    const newData = [
      ...lines.slice(0, tableStart + 1),
      tableHeader,
      sortedTableIncompatible,
      sortedTableCompatible,
      ...lines.slice(tableEnd),
    ].join("\n");

    // Write the sorted content back to the README.md file
    fs.writeFile("README.md", newData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("Table sorted successfully");
      }
    });
  });
};

export default sortTable;
