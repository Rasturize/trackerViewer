






if (Modernizr.geolocation) {

  navigator.geolocation.getCurrentPosition(function(position) {

    let latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    let myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true
    }
    let map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  });

} else {
  const para = document.createElement('p');
  para.textContent = 'Argh, no geolocation!';
  document.body.appendChild(para);
}
