function searchHospitals() {
    const searchQuery = document.getElementById('hospital-search').value;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/search', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const hospitals = JSON.parse(xhr.responseText).hospitals;
        const hospitalResults = document.getElementById('hospital-results');
        hospitalResults.innerHTML = '';
        hospitals.forEach(function(hospital) {
          const li = document.createElement('li');
          li.textContent = hospital.Name;
          hospitalResults.appendChild(li);
        });
      }
    };
    xhr.send('searchQuery=' + searchQuery);
  }
  
  function searchServices() {
    const searchQuery = document.getElementById('service-search').value;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/search', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const services = JSON.parse(xhr.responseText).services;
        const serviceResults = document.getElementById('service-results');
        serviceResults.innerHTML = '';
        services.forEach(function(service) {
          const li = document.createElement('li');
          li.textContent = service.Name;
          serviceResults.appendChild(li);
        });
      }
    };
    xhr.send('searchQuery=' + searchQuery);
  }
  