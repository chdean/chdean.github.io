mapboxgl.accessToken = 'pk.eyJ1IjoiY2hkZWFuIiwiYSI6ImNpam5razYyaDAwbzZ1b2x4ZGtmOWJqamEifQ.wHkqzd7Pa_pHNrtb5EmzyQ';

var filterInput = document.getElementById('pokemon-selector');
var noFilter = ["has", "pokemon"];
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-96, 37.8],
  zoom: 3
});

map.addControl(new mapboxgl.Geocoder());

function addPoints (filter) {
  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": "points",
    "layout": {
      "icon-image": "circle-15",
      "icon-allow-overlap": true,
      "text-field": "{pokemon}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-size": 14,
      "text-offset": [.5, -.35],
      "text-justify": "left",
      "text-anchor": "bottom-left"
    },
    "filter": filter
  });
}

map.on('load', function () {
  map.addSource("points", {
    "type": "geojson",
    "data": "pokemon.geojson"
  });

  addPoints(noFilter);

  filterInput.addEventListener("change", function () {
      map.removeLayer('points');
      if (filterInput.value != "All") {
          addPoints(["==", "pokemon", filterInput.value]);
      } else {
          addPoints(noFilter);
      }
  });
});

function popupImg (e) {
    if (e.properties.media_url != "null") {
        return '<img class="popup-img" src="' + e.properties.media_url + '"></img>';
    } else {
        return "";
    }
}

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['points'] });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    var popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<div class="popup">' + popupImg(feature) + feature.properties.embed_url + '</div>')
        .addTo(map);
});

map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['points']  });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

});
