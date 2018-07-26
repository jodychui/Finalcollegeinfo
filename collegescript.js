// higher num = more zoom
var map;
var schools = [
  ['Stanford University', 37.4275, -122.1697],
  ['UCLA', 34.0689, -118.4452],
  ['UC Berkeley', 37.8719, -122.2585],
  ['UC Davis', 38.5382, -121.7617],
  ['University of Washington', 47.655, -122.3035],
  ['Pomona College', 34.0977, -117.7118],
  ['University of Southern California', 34.0224, -118.2851],
  ['Santa Clara University', 37.3496, -121.9390],
  ['California Institute of Technology', 34.1377, -118.1253],
  ['Loyola Marymount University', 33.970, -118.4166],
  ['Claremont McKenna College', 34.1018, -117.7079],
  ['Harvey Mudd College', 34.1061, -117.710],
  ['Pepperdine University', 34.0414, -118.7096],
  ['Chapman University', 33.7933, -117.8514],
  ['San Jose State University', 37.3352, -121.8811],
  ['Cal Poly, San Luis Obispo', 35.3050, -120.6625],
  ['Golden Gate University', 37.7893, -122.3990],
  ['University of San Francisco', 37.7765, -122.4506],
  ['San Francisco State University', 37.7219, -122.4782],
  ['California State University Long Beach', 33, -118],
  ['California State University Fullerton', 33.8829, -117.8869],
  ['University of Hawaii', 21.2969, -157.8171],
  ['Seattle University', 47.6090, -122.3176],
  ['University of Pomona Polytechnic', 34.0576, -117.8207],
  ['Gonzaga University', 47.6672, -117.4024],
  ['Princeton University', 40.3440, -74.6514],
  ['Harvard University', 42.3770, -71.1167],
  ['Yale University', 41.3163, -72.9223],
  ['University of Pennsylvania', 39.9522, -75.1932],
  ['Cornell University', 42.4534, -76.4735],
  ['New York University', 40.7295, -73.9965],
  ['Boston University', 42.3505, -71.1054],
  ['Tufts University', 42.4075, -71.1190],
  ['University of Michigan', 42.2780, -83.7382],
  ['Barnard College', 40.809, -73.9640],
  ['Wesleyan University', 41.5566, -72.6569],
  ['Johns Hopkins University', 39.329, -76.6205],
  ['Duke University', 36.0014, -78.9382],
  ['Vassar College', 41.6868, -73.8957],
  ['Georgetown University', 38.9076, -77.0723],
  ['Wellesey College', 42.2936, -71.3059],
  ['Brown University', 41.8268, -71.4025],
  ['Amherst College', 42.3709, -72.5170],
  ['Dathmouth College', 43.7044, -72.2887],
  ['Williams College', 42.7128, -73.2030],
  ['Columbia University', 40.8075, -73.9626],
  ['Connecticut College', 41.3787, -72.1046],
  ['Vanderbilt University', 36.1447, -86.8027],
  ['Northwestern University', 42.055984, -87.67517],
  ['Northeastern University', 42.3398, -71.0892]
];


function initMap() {
var usa = {lat: 39.8283, lng: -98.5795}
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: usa
});




  setMarker(schools[0][1], schools[0][2], "college", schools[0][0])
  setMarker(schools[1][1], schools[1][2], "college", schools[1][0])
  setMarker(schools[2][1], schools[2][2], "college", schools[2][0])
  setMarker(schools[3][1], schools[3][2], "college", schools[3][0])
  setMarker(schools[4][1], schools[4][2], "college", schools[4][0])
  setMarker(schools[5][1], schools[5][2], "college", schools[5][0])
  setMarker(schools[6][1], schools[6][2], "college", schools[6][0])
  setMarker(schools[7][1], schools[7][2], "college", schools[7][0])
  setMarker(schools[8][1], schools[8][2], "college", schools[8][0])
  setMarker(schools[9][1], schools[9][2], "college", schools[9][0])
  setMarker(schools[10][1], schools[10][2], "college", schools[10][0])
  setMarker(schools[11][1], schools[11][2], "college", schools[11][0])
  setMarker(schools[12][1], schools[12][2], "college", schools[12][0])
  setMarker(schools[13][1], schools[13][2], "college", schools[13][0])
  setMarker(schools[14][1], schools[14][2], "college", schools[14][0])
  setMarker(schools[15][1], schools[15][2], "college", schools[15][0])
  setMarker(schools[16][1], schools[16][2], "college", schools[16][0])
  setMarker(schools[17][1], schools[17][2], "college", schools[17][0])
  setMarker(schools[18][1], schools[18][2], "college", schools[18][0])
  setMarker(schools[19][1], schools[19][2], "college", schools[19][0])
  setMarker(schools[20][1], schools[20][2], "college", schools[20][0])
  setMarker(schools[21][1], schools[21][2], "college", schools[21][0])
  setMarker(schools[22][1], schools[22][2], "college", schools[22][0])
  setMarker(schools[23][1], schools[23][2], "college", schools[23][0])
  setMarker(schools[24][1], schools[24][2], "college", schools[24][0])
  setMarker(schools[25][1], schools[25][2], "college", schools[25][0])
  setMarker(schools[26][1], schools[26][2], "college", schools[26][0])
  setMarker(schools[27][1], schools[27][2], "college", schools[27][0])
  setMarker(schools[28][1], schools[28][2], "college", schools[28][0])
  setMarker(schools[29][1], schools[29][2], "college", schools[29][0])
  setMarker(schools[30][1], schools[30][2], "college", schools[30][0])
  setMarker(schools[31][1], schools[31][2], "college", schools[31][0])
  setMarker(schools[32][1], schools[32][2], "college", schools[32][0])
  setMarker(schools[33][1], schools[33][2], "college", schools[33][0])
  setMarker(schools[34][1], schools[34][2], "college", schools[34][0])
  setMarker(schools[35][1], schools[35][2], "college", schools[35][0])
  setMarker(schools[36][1], schools[36][2], "college", schools[36][0])
  setMarker(schools[37][1], schools[37][2], "college", schools[37][0])
  setMarker(schools[38][1], schools[38][2], "college", schools[38][0])
  setMarker(schools[39][1], schools[39][2], "college", schools[39][0])
  setMarker(schools[40][1], schools[40][2], "college", schools[40][0])
  setMarker(schools[41][1], schools[41][2], "college", schools[41][0])
  setMarker(schools[42][1], schools[42][2], "college", schools[42][0])
  setMarker(schools[43][1], schools[43][2], "college", schools[43][0])
  setMarker(schools[44][1], schools[44][2], "college", schools[44][0])
  setMarker(schools[45][1], schools[45][2], "college", schools[45][0])
  setMarker(schools[46][1], schools[46][2], "college", schools[46][0])
  setMarker(schools[47][1], schools[47][2], "college", schools[47][0])
  setMarker(schools[48][1], schools[48][2], "college", schools[48][0])
  setMarker(schools[49][1], schools[49][2], "college", schools[49][0])
}



function setMarker(latitude, longtitude, title, content){
  var contentString = content;
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longtitude},
    map: map,
    title: title
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}


function show(){
  console.log("show function")
  document.getElementById("map").style.display = "inline";
}

function hide(){
  console.log("hide function")
  document.getElementById("map").style.display = "none";
}






