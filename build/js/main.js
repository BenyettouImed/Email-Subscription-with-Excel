document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx7GTnxrYrzbCfSTHdG1rc99HINyB53BtcjCVYxkRy77UvL97BY9m9NW8JikCs5MiX5VA/exec'
  const form = document.forms['submit-to-google-sheet']
    const confirmationMessage = document.getElementById('confirmationMessage')
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

      confirmationMessage.classList.remove('hidden'); 
    setTimeout(() => {
        confirmationMessage.classList.add('hidden');
    }, 2000);
    
    
  })
  });