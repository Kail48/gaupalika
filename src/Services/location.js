//sets latitude and logitude on localstorage
export default function getLocation(){
    let position=null;
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        localStorage.removeItem('latitude');
        localStorage.removeItem('longitude');
        let latitude=pos.coords.latitude;
        let longitude=pos.coords.longitude;
        localStorage.setItem('latitude',latitude);
        localStorage.setItem('longitude',longitude);
    
        return true;
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      let status=navigator.geolocation.getCurrentPosition(success, error, options);
      return status;

};