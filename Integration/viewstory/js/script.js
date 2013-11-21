$("section#steps nav.navSteps a").on("click", function(e){
    e.preventDefault();
    toggleStep($(e.currentTarget).data("step"));
});

$("section#steps section.step nav a").on("click", function(e){
    e.preventDefault();
    toggleStep($(e.currentTarget).data("way"));
});


function toggleStep(step) {
    $("section#steps li.focused").removeClass("focused");
    $("section#steps section.focused").removeClass("focused");
    $("section#steps nav ul li:nth-child("+step+")").toggleClass("focused");
    $("section#steps section#step"+step).toggleClass("focused");
}

function toggleTrip() {

    var addresses=[
        [47.4076041,0.6691852000000154],
        [47.8453124, 1.9209160000000338],
        [48.85946389999999, 2.38627299999996],
        [48.8518602,2.420284400000014]
    ];
    
    var origin = new google.maps.LatLng(addresses[0][0], addresses[0][1]);
    var waypoints = [];
    for(var i = 1; i < (addresses.length - 1); i++) {
        waypoints.push({
                  location:new google.maps.LatLng(addresses[i][0], addresses[i][1]),
                  stopover:true
        });
    }
    var dest = new google.maps.LatLng(addresses[addresses.length-1][0], addresses[addresses.length-1][1]);;
    
    var request = {
        origin: origin,
        destination: dest,
        waypoints: waypoints,
        provideRouteAlternatives: false,
        travelMode : google.maps.DirectionsTravelMode.WALKING,
    }
    var bounds = new google.maps.LatLngBounds (origin,dest); 
    var settings = {panControl: false, zoomControl: false, 
		    mapTypeControl: false, scaleControl: false, streetViewControl: false, overviewMapControl: false,
		    mapTypeId: google.maps.MapTypeId.ROADMAP };
    var map = new google.maps.Map(document.querySelector("#map"), settings);
    map.fitBounds(bounds);
    var display = new google.maps.DirectionsRenderer({map : map});
    var itinerary = new google.maps.DirectionsService();
    itinerary.route(request, function(response, status){
				if(status == google.maps.DirectionsStatus.OK){
        		display.setDirections(response); 
     		}
   	});
}


/*
function geoCode() {
    var geocoder=new google.maps.Geocoder();
	geocoder.geocode(
		{"address":address},
		function(data,status){
			if(status=='OK'){
			    addr = {latitude: data[0].geometry.location.lat(), longitude: data[0].geometry.location.lng()};
			} 
			else{
				addr = null;
			}
			console.log("Dans geocode", addr);
	});
	console.log("après geocode", addr);
	return addr;
}*/

toggleTrip();