var mymap = L.map('mapid').setView([40.505, -90.09], 5);


let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'

jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data, { style: { color: 'yellow' } }).addTo(mymap)
})

let grayBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
let streetsBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
let basemaps = {
  'Streets': streetsBasemap,
  'Gray canvas': grayBasemap
}
L.control.layers(basemaps).addTo(mymap)

let statesLayer = L.layerGroup().addTo(mymap)
statesLayer.addLayer(stateDemographicsUrl)
let layers = {
  'Median age by state': statesLayer
}

L.control.layers(basemaps, layers).addTo(mymap)
