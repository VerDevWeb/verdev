function aggiungiRiparazione() {
  if (document.getElementById('start1').value !== '') {

      var schede_number= document.getElementById('schede_number1');
      var status = document.getElementById('status1');
      var type = document.getElementById('type1');
      var brand = document.getElementById('brand1');
      var model = document.getElementById('model1');
      var serial_number= document.getElementById('serial_number1');
      var serial_number_two =  document.getElementById('serial_number_two1');
      var accessories = document.getElementById('accessories1');
      var status_description = document.getElementById('status_description1');
      var reported_defect = document.getElementById('reported_defect1');
      var customer_name = document.getElementById('customer_name1');
      var customer_phone = document.getElementById('customer_phone1');

      const endValue = document.getElementById('end1').value;
      const end = endValue.trim() === '' ? ' ' : endValue;

      const db = firebase.firestore();

      const path = db.collection('repairs').doc();

      const data = {
        schede_number: document.getElementById('schede_number1').value,
        repair_type: document.getElementById('repair_type1').value,
        start: document.getElementById('start1').value,
        end: end,
        status: document.getElementById('status1').value,
        type: document.getElementById('type1').value,
        brand: document.getElementById('brand1').value,
        model: document.getElementById('model1').value,
        serial_number: document.getElementById('serial_number1').value,
        serial_number_two: document.getElementById('serial_number_two1').value,
        accessories: document.getElementById('accessories1').value,
        status_description: document.getElementById('status_description1').value,
        reported_defect: document.getElementById('reported_defect1').value,
        customer_name: document.getElementById('customer_name1').value,
        customer_phone: document.getElementById('customer_phone1').value,
      };

      path.set(data)
      .then(() => {
        const newDocId = path.id; 
        return path.update({ id: newDocId }); 
      })
      .then(() => {
        notificate("Riparazione aggiunta con successo", 'normal');
        schede_number.value = '';
        status.value = '';
        type.value = '';
        brand.value = '';
        model.value = '';
        serial_number.value = '';
        serial_number_two.value = '';
        accessories.value = '';
        status_description.value = '';
        reported_defect.value = '';
        customer_name.value = '';
        customer_phone.value = '';
        getAllRepairs();
        getInternalRepairs();
        getWarrantyRepairs();
      })
      .catch((error) => {
        notificate("Errore durante l'aggiunta della riparazione: " + error, 'error');
      });
} else {
  notificate('Si prega di inserire una data di ingresso valida', 'error');
}
}



function deleteRepair(data) {
  const db = firebase.firestore();
  const docRef = db.collection('repairs').doc(data.id);
  
  docRef.delete()
    .then(() => {
      notificate('Riparazione eliminata con successo', 'normal');
      getAllRepairs();
      getInternalRepairs();
      getWarrantyRepairs();
    })
    .catch((error) => {
      notificate("Errore durante l'eliminazione della riparazione:" + error, 'error');
    });
  }



  function getRepairDataToFill(data) { 
    globalThis.currentRepair = data;
    showChangeRepair();

    var schede_number= document.getElementById('schede_number2');
    var start = document.getElementById('start2');
    var end = document.getElementById('end2');
    var status = document.getElementById('status2');
    var type = document.getElementById('type2');
    var brand = document.getElementById('brand2');
    var model = document.getElementById('model2');
    var serial_number= document.getElementById('serial_number2');
    var serial_number_two =  document.getElementById('serial_number_two2');
    var accessories = document.getElementById('accessories2');
    var status_description = document.getElementById('status_description2');
    var reported_defect = document.getElementById('reported_defect2');
    var customer_name = document.getElementById('customer_name2');
    var customer_phone = document.getElementById('customer_phone2');


    schede_number.value = data.schede_number;
    type.value = data.type;
    brand.value = data.brand;
    model.value = data.model;
    serial_number.value = data.serial_number;
    serial_number_two.value = data.serial_number_two;
    accessories.value = data.accessories;
    status_description.value = data.status_description;
    reported_defect.value = data.reported_defect;
    customer_name.value = data.customer_name;
    customer_phone.value = data.customer_phone;

   
    var menu2 = document.getElementById("status2");
    for (var i = 0; i < menu2.options.length; i++) {
      if (menu2.options[i].value === data.status) {
        menu2.selectedIndex = i;
        break;
      }
    }

    var menu3 = document.getElementById("repair_type2");
    for (var i = 0; i < menu3.options.length; i++) {
      if (menu3.options[i].value === data.repair_type) {
        menu3.selectedIndex = i;
        break;
      }
    }

    var endDateInput = data.end; 
    var inputDate1 = document.getElementById('end2');
    inputDate1.value = endDateInput;
  
    var startDateInput = data.start; 
    var inputDate2 = document.getElementById('start2');
    inputDate2.value = startDateInput;
  
    
    document.getElementById('start2').value = data.start;
    document.getElementById('end2').value = data.end;
  }



  function changeRepair(){
      const path = db.collection('repairs').doc(globalThis.currentRepair.id);
      
      const data = {
        schede_number: document.getElementById('schede_number2').value,
        repair_type: document.getElementById('repair_type2').value,
        start: document.getElementById('start2').value,
        end: document.getElementById('end2').value,
        status: document.getElementById('status2').value,
        type: document.getElementById('type2').value,
        brand: document.getElementById('brand2').value,
        model: document.getElementById('model2').value,
        serial_number: document.getElementById('serial_number2').value,
        serial_number_two: document.getElementById('serial_number_two2').value,
        accessories: document.getElementById('accessories2').value,
        status_description: document.getElementById('status_description2').value,
        reported_defect: document.getElementById('reported_defect2').value,
        customer_name: document.getElementById('customer_name2').value,
        customer_phone: document.getElementById('customer_phone2').value,
      };

      
  
      path.update(data)
        .then(() => {
          notificate("Riparazione modificata con successo" , 'normal');
          showTutteLeRiparazioni();
          getAllRepairs();
          getInternalRepairs();
          getWarrantyRepairs();
        })
        .catch((error) => {
          notificate("Errore durante la modifica della riparazione: " + error, 'error');
        });
    }
  
  