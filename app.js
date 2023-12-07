// app.js
const map = L.map('map').setView([46.6031, 1.8208], 6); // Coordonnées du centre de la France

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Charger les données GeoJSON
fetch('./data/departements.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(`<b>Département ${feature.properties.code}</b><br>${feature.properties.nom}`);
      }
    }).addTo(map);
  });
