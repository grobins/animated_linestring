$(function(){
  var map = L.map('map').setView([-37.5206186788693, 175.6768798828125], 8);
  var mapLayer = L.tileLayer(
    'http://{s}.base.maps.api.here.com/maptile/2.1/maptile/newest/{scheme}/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}', {
      attribution: 'here',
      subdomains: '1234',
      type: 'maptile',
      scheme: 'reduced.night',
      app_id: 'YMrZqd46drhr6T3kVqeP',
      app_code: 'q0eJCAo4G_C9UxTsYvXRPQ',
      mapID: 'newest',
      maxZoom: 20,
      format: 'png8',
      size: '256'
    }).addTo(map);

// var linestring = 'LINESTRING (175.1275634765625 -37.37888785004525, 175.15228271484375 -37.41816326969144, 175.13031005859375 -37.48793540168985, 175.1385498046875 -37.542399580540646, 175.15777587890625 -37.5990001506485, 175.220947265625 -37.65773212628273, 175.28961181640625 -37.6946877032359, 175.35003662109375 -37.712072193108476, 175.40771484375 -37.74248523826606, 175.43243408203125 -37.78808138412046, 175.3912353515625 -37.846663684549135, 175.1824951171875 -37.88569271818348, 175.1165771484375 -37.80978395301097, 175.10284423828125 -37.76854362092148, 175.045166015625 -37.601176236566666, 175.01495361328125 -37.53368798315968, 174.99847412109375 -37.47703779669805, 175.00946044921875 -37.43343148473672, 175.05615234375 -37.35050947036204, 175.1220703125 -37.33304051804566, 175.21820068359375 -37.335224359306395, 175.24566650390625 -37.402891941223764, 175.25390624999997 -37.43343148473672, 175.2484130859375 -37.5053682633981, 175.26763916015625 -37.542399580540646, 175.34454345703125 -37.59029517052193, 175.39947509765625 -37.620758145519545, 175.4351806640625 -37.646859336209594, 175.47637939453125 -37.677299136404265, 175.5010986328125 -37.71424496764925, 175.52032470703125 -37.76854362092148, 175.54229736328125 -37.82714141683739, 175.53405761718747 -37.898697801966094, 175.48736572265622 -37.937699267328625, 175.352783203125 -37.95935781079228, 175.28961181640625 -37.983174833513374, 175.264892578125 -38.00265574055668, 175.26763916015625 -38.05241677186484, 175.37200927734375 -38.0956597552956, 175.44891357421875 -38.071879278269996, 175.616455078125 -37.95069515957716, 175.65216064453125 -37.896530447543, 175.67138671875 -37.829310812825035, 175.67413330078122 -37.75334401310657, 175.66314697265625 -37.6903409437177, 175.6494140625 -37.65338320128764, 175.6329345703125 -37.609879943747124, 175.6109619140625 -37.56417412088096, 175.5999755859375 -37.52933180281508, 175.6549072265625 -37.49229399862876, 175.6768798828125 -37.5206186788693, 175.7318115234375 -37.609879943747124, 175.770263671875 -37.672951357747145)';
// var wicket = new Wkt.Wkt();
// wicket.read(linestring);
// "greenIcon from official documentation noted above.
// var feature = wicket.toObject();
// Presumably featureGroup is already instantiated and added to your map.
// map.addLayer(feature);

  function parseLinestringToArray(linestring){
    var res = linestring.replace('LINESTRING (', '');
    var res = res.replace(')', '');
    var res = res.split(', ');
    var arr = new Array();

    for (var i = 0; i < res.length; i++ ){
      var elem = new Array;
      elem = res[i].split(' ');
      arr.push(elem);
    }

    return arr
  };

function cycleLinestring(linestring){
  var marker = L.marker([-35.5423308442, 176.574665847]).addTo(map);
  var points = parseLinestringToArray(linestring);

  for (i=0; i < points.length; i++){
        var lon = points[i][0];
        var lat = points[i][1];
        L.marker([lat, lon]).addTo(map);
  }

}


// $('#playButton').click(function(){
//   console.log('clicked')
//   var linestring = 'LINESTRING (175.1275634765625 -37.37888785004525, 175.15228271484375 -37.41816326969144, 175.13031005859375 -37.48793540168985, 175.1385498046875 -37.542399580540646, 175.15777587890625 -37.5990001506485, 175.220947265625 -37.65773212628273, 175.28961181640625 -37.6946877032359, 175.35003662109375 -37.712072193108476, 175.40771484375 -37.74248523826606, 175.43243408203125 -37.78808138412046, 175.3912353515625 -37.846663684549135, 175.1824951171875 -37.88569271818348, 175.1165771484375 -37.80978395301097, 175.10284423828125 -37.76854362092148, 175.045166015625 -37.601176236566666, 175.01495361328125 -37.53368798315968, 174.99847412109375 -37.47703779669805, 175.00946044921875 -37.43343148473672, 175.05615234375 -37.35050947036204, 175.1220703125 -37.33304051804566, 175.21820068359375 -37.335224359306395, 175.24566650390625 -37.402891941223764, 175.25390624999997 -37.43343148473672, 175.2484130859375 -37.5053682633981, 175.26763916015625 -37.542399580540646, 175.34454345703125 -37.59029517052193, 175.39947509765625 -37.620758145519545, 175.4351806640625 -37.646859336209594, 175.47637939453125 -37.677299136404265, 175.5010986328125 -37.71424496764925, 175.52032470703125 -37.76854362092148, 175.54229736328125 -37.82714141683739, 175.53405761718747 -37.898697801966094, 175.48736572265622 -37.937699267328625, 175.352783203125 -37.95935781079228, 175.28961181640625 -37.983174833513374, 175.264892578125 -38.00265574055668, 175.26763916015625 -38.05241677186484, 175.37200927734375 -38.0956597552956, 175.44891357421875 -38.071879278269996, 175.616455078125 -37.95069515957716, 175.65216064453125 -37.896530447543, 175.67138671875 -37.829310812825035, 175.67413330078122 -37.75334401310657, 175.66314697265625 -37.6903409437177, 175.6494140625 -37.65338320128764, 175.6329345703125 -37.609879943747124, 175.6109619140625 -37.56417412088096, 175.5999755859375 -37.52933180281508, 175.6549072265625 -37.49229399862876, 175.6768798828125 -37.5206186788693, 175.7318115234375 -37.609879943747124, 175.770263671875 -37.672951357747145)';
//   cycleLinestring(linestring);
// });





/// cycle through time

var data = [{time:1,lon:175.1275634765625,lat:-37.37888785004525},
  {time:2,lon:175.15228271484375,lat:-37.41816326969144},
  {time:3,lon:175.13031005859375,lat:-37.48793540168985},
  {time:4,lon:175.1385498046875,lat:-37.542399580540646},
  {time:5,lon:175.15777587890625,lat:-37.5990001506485},
  {time:6,lon:175.220947265625,lat:-37.65773212628273},
  {time:7,lon:175.28961181640625,lat:-37.6946877032359},
  {time:8,lon:175.35003662109375,lat:-37.712072193108476},
  {time:9,lon:175.40771484375,lat:-37.74248523826606},
  {time:10,lon:175.43243408203125,lat:-37.78808138412046},
  {time:11,lon:175.3912353515625,lat:-37.846663684549135},
  {time:12,lon:175.1824951171875,lat:-37.88569271818348},
  {time:13,lon:175.1165771484375,lat:-37.80978395301097},
  {time:14,lon:175.10284423828125,lat:-37.76854362092148},
  {time:19,lon:175.045166015625,lat:-37.601176236566666},
  {time:20,lon:175.01495361328125,lat:-37.53368798315968},
  {time:21,lon:174.99847412109375,lat:-37.47703779669805},
  {time:22,lon:175.00946044921875,lat:-37.43343148473672},
  {time:23,lon:175.05615234375,lat:-37.35050947036204},
  {time:34,lon:175.1220703125,lat:-37.33304051804566},
  {time:35,lon:175.21820068359375,lat:-37.335224359306395},
  {time:36,lon:175.24566650390625,lat:-37.402891941223764},
  {time:37,lon:175.25390624999997,lat:-37.43343148473672},
  {time:38,lon:175.2484130859375,lat:-37.5053682633981},
  {time:39,lon:175.26763916015625,lat:-37.542399580540646},
  {time:40,lon:175.34454345703125,lat:-37.59029517052193},
  {time:41,lon:175.39947509765625,lat:-37.620758145519545},
  {time:42,lon:175.4351806640625,lat:-37.646859336209594},
  {time:43,lon:175.47637939453125,lat:-37.677299136404265},
  {time:44,lon:175.5010986328125,lat:-37.71424496764925},
  {time:49,lon:175.52032470703125,lat:-37.76854362092148},
  {time:50,lon:175.54229736328125,lat:-37.82714141683739},
  {time:51,lon:175.53405761718747,lat:-37.898697801966094},
  {time:52,lon:175.48736572265622,lat:-37.937699267328625},
  {time:53,lon:175.352783203125,lat:-37.95935781079228},
  {time:54,lon:175.28961181640625,lat:-37.983174833513374},
  {time:55,lon:175.264892578125,lat:-38.00265574055668},
  {time:56,lon:175.26763916015625,lat:-38.05241677186484},
  {time:57,lon:175.37200927734375,lat:-38.0956597552956},
  {time:58,lon:175.44891357421875,lat:-38.071879278269996},
  {time:59,lon:175.616455078125,lat:-37.95069515957716},
  {time:60,lon:175.65216064453125,lat:-37.896530447543},
  {time:61,lon:175.67138671875,lat:-37.829310812825035},
  {time:62,lon:175.67413330078122,lat:-37.75334401310657},
  {time:63,lon:175.66314697265625,lat:-37.6903409437177},
  {time:64,lon:175.6494140625,lat:-37.65338320128764},
  {time:65,lon:175.6329345703125,lat:-37.609879943747124},
  {time:66,lon:175.6109619140625,lat:-37.56417412088096},
  {time:70,lon:175.5999755859375,lat:-37.52933180281508},
  {time:71,lon:175.6549072265625,lat:-37.49229399862876},
  {time:72,lon:175.6768798828125,lat:-37.5206186788693},
  {time:73,lon:175.7318115234375,lat:-37.609879943747124},
  {time:74,lon:175.770263671875,lat:-37.672951357747145}]
result = $.grep(data, function(e){return e.time == 63;});
console.log(result);
  
var start = moment();
var i = 0
  $('#playButton').click(function(){
    var interval = 200;
    var mytimer =    setInterval(function(){
        i++
        var result = $.grep(data, function(e){
          return e.time == i;
          $.each(data, function(i, el){
              if (this.time == result.time){
                  data.splice(i, 1);
              }
          });          
 

        });
        console.log(result);
        if(result.length){
          L.marker([result[0].lat, result[0].lon]).addTo(map);
          
        };
    }, interval);
  });



});