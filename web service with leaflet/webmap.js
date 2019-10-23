var mymap = L.map('mapid').setView([40, -90.09], 5);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ2lzbHN1IiwiYSI6ImNqMHIwZHlrdzAyMncycW81cTV6cDBldjgifQ.e0o7UhbPkntZ8NdS5VtqSw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);

L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
        layers: 'nexrad-n0r-900913',
        format: 'image/png',
        transparent: true,
        attribution: 'NOAA, Iowa State University'
      }).addTo(mymap)
