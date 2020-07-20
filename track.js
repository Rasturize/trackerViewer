
function triggerAlerts() {

  let menu = document.getElementById("detect");
  let alert = document.createElement("td");

  switch() {
    default:
      text = "results will be shown here..."
      menu.appendChild(alert)
      break;
    case 0:
      if (Modernizr.canvas) {
        alert.textContent = "Canvas enabled";
        menu.appendChild(alert);
        break;
      }
    case 1:
      if (Modernizr.cookies) {
        alert.textContent = "Cookies enabled";
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
