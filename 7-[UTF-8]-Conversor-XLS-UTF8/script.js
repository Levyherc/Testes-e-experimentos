// script.js
document.getElementById("convertBtn").addEventListener("click", () => {
  const input = document.getElementById("xlsxInput");
  const file = input.files[0];
  const status = document.getElementById("status");

  if (!file) {
    alert("Selecione um arquivo XLSX.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    const firstSheet = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheet];

    const csv = XLSX.utils.sheet_to_csv(worksheet, {
      FS: ";",
      RS: "\n",
      strip: true
    });

    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    const blob = new Blob([bom, csv], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "convertido_utf8.csv";
    link.click();

    status.textContent = "Arquivo CSV gerado com sucesso!";
  };

  reader.readAsArrayBuffer(file);
});
