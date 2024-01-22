function aggiungiCelle() {
   var table = document.getElementById("pdf_table1");
   var row = table.insertRow(1);

   for (var i = 0; i < 4; i++) {
     var cell = row.insertCell(i);
     var inputId = "input" + (i + 1);
     cell.innerHTML = document.getElementById(inputId).value;
   }
 }

 function demoFromHTML() {
 var pdf = new jsPDF('p', 'pt', 'letter');
 source = $('#customers')[0];
 specialElementHandlers = {
     '#bypassme': function (element, renderer) {
         return true
     }
 };
 margins = {
     top: 80,
     bottom: 60,
     left: 40,
     width: 522
 };
 pdf.fromHTML(
 source,
 margins.left,
 margins.top, {
     'width': margins.width,
     'elementHandlers': specialElementHandlers
 },

 function (dispose) {
     pdf.save('Test.pdf');
 }, margins);
}