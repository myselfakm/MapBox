mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyYWRheTIiLCJhIjoiTUVHbDl5OCJ9.buFaqIdaIM3iXr1BOYKpsQ';
let map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
  center: [-1.77, 52.73],
  zoom: 3,
});

let icon = document.getElementById('icon');

icon.addEventListener('click', function(e) {
	map.setStyle('mapbox://styles/mapbox/light-v9');
}, false)