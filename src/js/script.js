mapboxgl.accessToken = 'pk.eyJ1IjoidWEyIiwiYSI6ImNtbnl3djZ2azA2bHMycm9nb3MycmZpN3UifQ._jWrIGrPo-6izrQe9cfgrw';

var mapProps = {
	container: 'map',
	center: [-73.97, 40.75],
	zoom: 9
};

var map = new mapboxgl.Map(mapProps);

let popup = new mapboxgl.Popup({ closeOnClick: false})
.setLngLat([-73.97, 40.75])
.setHTML('<h1>I <span><3</span> NY</h1>')
.addTo(map);
