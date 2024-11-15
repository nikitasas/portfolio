document.getElementById('aboutButton').addEventListener('click', function() {
    document.getElementById('aboutModal').style.display = 'block';
  });
  
  document.getElementById('experienceButton').addEventListener('click', function() {
    document.getElementById('experienceModal').style.display = 'block';
  });
  
  
  var modals = document.getElementsByClassName('modal');
  var spans = document.getElementsByClassName("close");
  
  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
      var modal = this.parentElement.parentElement;
      modal.style.display = "none";
    }
  }
  
  window.onclick = function(event) {
    for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.display = "none";
      }
    }
  }