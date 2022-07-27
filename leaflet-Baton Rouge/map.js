// map center
var mymap = L.map('map').setView([30.5, -91.1], 10.5);

// add a basemap
var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo( mymap );


var marker = L.marker([30.4555, -91.18727]).addTo(mymap);
     marker.bindPopup("<b>Hello world!</b><br>This is Baton Rouge capital tower.").openPopup();
     var popup = L.popup()
    .setLatLng([30.4555, -91.18727])
    .setContent("This is Baton Rouge capital tower")
    .openOn(mymap);

//pop out the coordinate
var popup = L.popup();
function onMapClick(e) {
    popup
       .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


// Adding LSU
var polygon = L.polygon([
    [30.40682, -91.19854],
    [30.41256, -91.19554],
    [30.41818, -91.1939],
	[30.41804, -91.18918],
    [30.41778, -91.18421],
    [30.41952, -91.18421],
	[30.41959, -91.18013],
    [30.41715, -91.17644],
    [30.41696, -91.17303],
	[30.41928, -91.17268],
	[30.41933, -91.17004],
	[30.40941, -91.16635],
	[30.40334, -91.17498]
]).addTo(mymap);
polygon.bindPopup("This is a LSU campus.");

 //Add a popup to GeoJSON features
jQuery.getJSON( "https://opendata.arcgis.com/datasets/ef927acb261c48c3bbef735602b9f5dc_3.geojson", function( Nationallandmark ) {
L.geoJSON(Nationallandmark,{onEachFeature: createPopup}).addTo(mymap);
  });
  function createPopup(Nationallandmark, layer) {
  layer.bindPopup(Nationallandmark.properties.NAME)
}
