function deleteCompany(data) {
    const db = firebase.firestore();
    const docRef = db.collection('companies').doc(data.id);
    
    docRef.delete()
      .then(() => {
        notificate('Azienda eliminata con successo', 'normal');
        getCompanies1();
      })
      .catch((error) => {
        notificate("Errore durante l'eliminazione dell'azienda:" + error, 'error');
      });
    }

    function deleteProject(data) {
      const db = firebase.firestore();
      const docRef = db.collection('projects').doc(data.id);
      
      docRef.delete()
        .then(() => {
          notificate('Progetto eliminato con successo', 'normal');
          getProjects();
        })
        .catch((error) => {
          notificate("Errore durante l'eliminazione del progetto:" + error, 'error');
        });
      }

      function deleteBrand(data) {
        const db = firebase.firestore();
        const docRef = db.collection('brands').doc(data.id);
        
        docRef.delete()
          .then(() => {
            notificate('Marchio eliminato con successo', 'normal');
            getBrands();
          })
          .catch((error) => {
            notificate("Errore durante l'eliminazione del marchio:" + error, 'error');
          });
        }

        function deleteTask(data) {
          const db = firebase.firestore();
          const docRef = db.collection('tasks').doc(data.id);
          
          docRef.delete()
            .then(() => {
              notificate('Task eliminato con successo', 'normal');
              getTasks();
            })
            .catch((error) => {
              notificate("Errore durante l'eliminazione del task:" + error, 'error');
            });
          }


          function deleteAccounting(data) {
            const db = firebase.firestore();
            const docRef = db.collection('accountings').doc(data.id);

            var docRef2 = db.collection('tasks').doc(data.accounting_task_id);
docRef2.update({
    dedicated_minutes: firebase.firestore.FieldValue.increment(-data.dedicated_minutes)
})
.catch(function(error) {
    notificate("Errore nel sottrarre il tempo impiegato per questa contabilizzazione al tempo di lavoro complessivo per un task: " + error , 'error');
});
            
            docRef.delete()
              .then(() => {
                notificate('Contabilizzazione eliminata con successo', 'normal');
                if (document.getElementById('change_task').style.display === 'flex'){
                  getTaskAccountings();
                }else{
                  getAccountings();
                }
              })
              .catch((error) => {
                notificate("Errore durante l'eliminazione della contabilizzazione:" + error, 'error');
              });
            }