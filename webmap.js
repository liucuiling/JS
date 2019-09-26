var mymap = L.map('mapid').setView([39, -39], 4);
    	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ2lzbHN1IiwiYSI6ImNqMHIwZHlrdzAyMncycW81cTV6cDBldjgifQ.e0o7UhbPkntZ8NdS5VtqSw', {
    		maxZoom: 18,
    		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    		id: 'mapbox.streets'
    	}).addTo(mymap);

var geoJsonLayer2 = new GeoJsonLayer({
          url: "ttps://github.com/geog4046/geog4046.github.io/blob/master/portfolio/data/us_state_demographics_ESRI_2010A.geojson"
      });
mymap.addLayer(geoJsonLayer2);
