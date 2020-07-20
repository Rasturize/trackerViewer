
function triggerAlerts() {

  let menu = document.getElementById("detect");

  switch() {
    case 0:
      let canvas = document.createElement("canvas");
      if (Modernizr.canvas) {
        canvas.textContent = "Enabled";
        menu.appendChild(canvas);
        break;
      }
    case 1:

      if (Modernizr.cookies) {
        alert.textContent = "Enabled";
        menu.appendChild(alert);
        break;
      }
    case 2:
      if (Modernizr.cors) {
        alert.textContent = "Cross-Domain sharing enabled";
        menu.appendChild(alert);
        break;
      }
    case 3:
      if (Modernizr.fullscreen) {
        alert.textContent = "Fullscreen takeover enabled";
        menu.appendChild(alert);
        break;
      }

  }

}

 // ctrl + /
// if (Modernizr.geolocation) {
//
//   navigator.geolocation.getCurrentPosition(function(position) {
//
//     let latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
//     let myOptions = {
//       zoom: 8,
//       center: latlng,
//       mapTypeId: google.maps.MapTypeId.TERRAIN,
//       disableDefaultUI: true
//     }
//     let map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//   });
//
// } else {
//   const para = document.createElement('p');
//   para.textContent = 'no geolocation!';
//   document.body.appendChild(para);
// }
