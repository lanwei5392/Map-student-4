//Define global map and markers variables
      		var map;
            var markers = [];
            //Our view, locations that we'll display
            var locations = [{
                title: "Capital",
                image: 'img/capital.jpg',
                content: 'Hello',
                location: {
                    lat: 38.576828, 
                    lng: -121.493605
                },
            },
            {
                title: "Old Sacramento",
                image: 'img/capital.jpg',
                content: 'Hii',
                location: {
                    lat: 38.583689, 
                    lng: -121.503856
                },
            },
            {
                title: "Sutter's Fort",
                image: 'img/capital.jpg',
                content: 'Hay',
                location: {
                    lat: 38.572417, 
                    lng: -121.471106
                },
            },
            {
            	title: "Crocker Art Museum",
            	location: {
            		image: 'img/capital.jpg',
            		content: 'Content here',
            		lat: 38.577130, 
            		lng: -121.505998,
            	},
            },
            {
            	title: "Tower Bridge",
            	image: 'img/capital.jpg',
            	content: 'Content here',
            	location: {
            		lat: 38.580721, 
            		lng: -121.508011,
            	},
            }

        ];

        	//Initialize map and markers
      		function initMap() {
        	// Constructor creates a new map - only center and zoom are required.
        		map = new google.maps.Map(document.getElementById('map'), {
        			//Set center of map
        			center: {lat: 38.576661, lng: -121.493637},
          			zoom: 13
        		}); 
                //
                //Create infowindow
                var largeInfowindow = new google.maps.InfoWindow();
                maxWidth: 200;
                //Create bounds that will be displayed on map
                var bounds = new google.maps.LatLngBounds();
                //Loop through our locations and display our markers
                for (var i = 0; i < locations.length; i++) {
                    //Get our position from our array of locations
                    var content = locations[i].content;
                    var title = locations[i].title;
                    var position = locations[i].location;
                    var marker = new google.maps.Marker({
                    	title: title,
                        map: map,
                        position: position,
                        content: content,
                        animation: google.maps.Animation.DROP,
                    });
                //Push markers to the map
                markers.push(marker);
                //Extend our map to where markers are
                bounds.extend(marker.position);
                //Open infowindow when marker is clicked
                marker.addListener('click', function() {
                    populateInfoWindow(this, largeInfowindow);
                    toggleBounce(this, marker);
                })    

            }

            //Function to display infowindow
             function populateInfoWindow(marker, infowindow) {
                if (infowindow.marker != marker) {
                    infowindow.marker = marker;
                    infowindow.setContent(marker.title);
                    infowindow.open(map, marker);
                    //Make infowindow close on second click
                    //infowindow.addListener('closeclick', function() {
                      //  infowindow.setMarker(null);
                   // })
                }

            }           

            //Fit map to bounds
            map.fitBounds(bounds);
            //Make markers bounce when clicked!
            function toggleBounce(marker) {
                //Create function to animate markers when clicked
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    marker.setAnimation(google.maps.Animation.null);
                }, 500);
                
            }


      		}


var listViewModel = function() {
    this.listView = ko.observable();
    //this.name = ko.observable();

}

ko.applyBindings(new listViewModel);

//Wikipeida AJAX request:
//Create wiki ur:
var wikiUrl = 'http://en.wikipeida.org/w/api.php?action=opensearch&search=' + title + '&format=json&callback=wikiCallback';
//Create ajax request object
$.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    success: function( response ) {
        var wikiList = response[1];
        var wikipediaURL = 'http://en.wikipedia.org/wiki/' + marker.title;
        infowindow.setContent(marker.title);
        infowindow.open(map, maker);


    }


})


