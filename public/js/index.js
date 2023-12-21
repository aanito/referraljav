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
          const a = document.createElement('a');
          a.textContent = hospital.Name;
          a.href = '/hospital/' + hospital._id;
          li.appendChild(a);
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
          const a = document.createElement('a');
          a.textContent = service.Name;
          a.href = '/service/' + service._id;
          li.appendChild(a);
          serviceResults.appendChild(li);
        });
      }
    };
    xhr.send('searchQuery=' + searchQuery);
  }
 

  const slideshowImages = [
    "/images/hospitalSearch.jpeg",
    "/images/services.jpeg",
    "/images/hospitalspage.jpeg"
  ];
  let currentSlide = 0;

  function showNextSlide() {
    const slideshow = document.querySelector('.slideshow');
    slideshow.innerHTML = `
      <img src="${slideshowImages[currentSlide]}" alt="Slide ${currentSlide + 1}">
    `;
    currentSlide = (currentSlide + 1) % slideshowImages.length;
  }

  // Change slide every 5 seconds (5000 milliseconds)
  setInterval(showNextSlide, 5000);