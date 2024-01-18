   // Crea un nuovo documento PDF
   const pdfDoc = new jsPDF();

   // Aggiungi testo al documento
   pdfDoc.text('Nuovo valore', 10, 10);

   // Salva il PDF
   pdfDoc.save('compiled.pdf');

