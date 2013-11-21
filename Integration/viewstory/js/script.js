$("section#steps nav.navSteps a").on("click", function(e){
    e.preventDefault();
    toggleStep($(this).data("step"));
});

$("section#steps section.step nav a").on("click", function(e){
    e.preventDefault();
    toggleStep($(this).data("way"));
});


function toggleStep(step) {
    $(".focused").removeClass("focused");
    $("section#steps nav ul li:nth-child("+step+"), section#step"+step).toggleClass("focused");
}

function toggleTrip() {

    var addresses=[
        [48.8719343,2.331766600000037],
        [48.85325599999999, 2.3438691000000063],
        [48.8799741, 2.3818407999999636],
        [48.856614,2.3522219000000177]
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
    var display = new google.maps.DirectionsRenderer({map : map, markerOptions: {icon: "images/pin.png"}});
    var itinerary = new google.maps.DirectionsService();
    itinerary.route(request, function(response, status){
	    if(status == google.maps.DirectionsStatus.OK){
            display.setDirections(response);
     	}
   	});
}


/*
function geoCode() {
    var addresses = [
        "La Comédie Française, Place Colette, Paris",
        "Opéra Garnier, Rue Scribe, Paris",
        "Fontaine Saint-Michel, Place Saint-Michel, Paris",
        "Parc des Buttes Chaumont, Rue Botzaris, Paris"
    ];
    var geocodes = [];
    var geocoder=new google.maps.Geocoder();
    
    for(var i = 0; i < addresses.length; i++) {
        geocoder.geocode(
    		{"address":addresses[i]},
    		function(data,status){
    			if(status=='OK'){
    			    geocodes.push({latitude: data[0].geometry.location.lat(), longitude: data[0].geometry.location.lng()});
    			} 
    			else{
    				geocodes.push(null);
    			}
    	}); 
    }
	setTimeout(function(){console.log(geocodes)},3000);
}*/

toggleTrip();