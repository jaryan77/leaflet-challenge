url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"


var grayscalemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.light",
        accessToken: API_KEY
    });

var map = L.map('mapid', {
        center: [35.13, -119.67],
        zoom: 2
    });       

grayscalemap.addTo(map);

d3.json(url, function(data) {
    
    function markerStyles(feature) {
        return {
            opacity: 1,
            radius: magRadius(features.properties.mag),
            fillColor: colorCircle(features.geometry.coordinates[2]),
            color: '#00ff00',
            fillOpactiy: 1,
            stroke: true,
            weight: 0.5
        };
    }

    function magRadius(magnitude) {
        return magnitude * 5;
    }

    function colorCircle(depth) {
        if (depth > 90) {return "#ff0000";}

        if (depth > 70) {return "#ff7f50";}

        if (depth > 50) {return "#ff8c00";}

        if (depth > 30) {return "#daa520";}

        if (depth > 10) {return "#ffd700";}

        else {return "#00ff00";}

    }

    L.geoJson(data, {
        pointToLayer:function(feature, latlng) {
            return L.circleMarker(latlng);
        },
        style:markerStyles,
        onEachFeature:function(feature, latlng) {
            layer.bindPopup("<h3>Magnitude: " + feature.properties.mag + "</h3>");
        }
    }).addTo(map);

    var legend = 

    });






