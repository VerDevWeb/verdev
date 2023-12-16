

function deleteTaskGET() {
  const db = firebase.firestore();
  const taskId = globalThis.currentTask.id;
  const companyId = globalThis.currentTask.company_id;
  const taskRef = db.collection('companies').doc(companyId).collection('tasks').doc(taskId);
  const deleteAccountings = taskRef.collection('accountings').get().then((snapshot) => {
    const deletePromises = [];
    snapshot.forEach((doc) => {
      deletePromises.push(doc.ref.delete());
    });
    return Promise.all(deletePromises);
  });
  const deleteTask = taskRef.delete();
  Promise.all([deleteAccountings, deleteTask])
    .then(() => {
      getOpenCompanyTasks();
      alert("Task eliminato con successo");
    })
    .catch((error) => {
      alert("Errore durante l'eliminazione del task: " + error.message);
    });
}




function deleteCompanyGET1(data) {

const uid = getCookieValue('uid');
const db = firebase.firestore();
const docRef = db.collection('companies').doc(data.id);

docRef.delete()
  .then(() => {
    alert("Azienda eliminata con successo");
    getCompanies1();
  })
  .catch((error) => {
    alert("Errore durante l'eliminazione dell'azienda: ", error);
  });
}




function deleteAccounting(data) {
const db = firebase.firestore();
const docRef = db.collection('companies').doc(globalThis.currentTask.company_id).collection('tasks').doc(globalThis.currentTask.id).collection('accountings').doc(data.id);

docRef.delete()
  .then(() => {
    alert("Contabilizzazione eliminata con successo");
    getTaskAccountings(globalThis.currentTask);
  })
  .catch((error) => {
    alert("Errore durante l'eliminazione della contabilizzazione: " + error.message);
  });
}