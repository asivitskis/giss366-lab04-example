// Build your map here!
let map = L.map("map", {center: [32.77, -108.278], zoom: 15})

// 2. Add a basemap tile layer

// Add additional basemap
let alt_base = L.tileLayer.provider("OpenTopoMap").addTo(map);

// 3. Add at least one marker, line, or polygon
let pnt = L.marker([32.77, -108.278]).addTo(map);
pnt.bindPopup("This is Silver City.");

// Add a scale bar
L.control.scale().addTo(map);