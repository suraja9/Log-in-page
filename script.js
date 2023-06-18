function submitForm(event) {
    var titleInput = document.getElementById('titleInput');
    var descriptionInput = document.getElementById('descriptionInput');
  
    if (titleInput.value.trim() === '' || descriptionInput.value.trim() === '') {
      event.preventDefault();
      alert('Please fill in all the fields.');
      return;
    }
    localStorage.setItem('title', titleInput.value);
    localStorage.setItem('description', descriptionInput.value);
  }
  