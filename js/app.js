      		var map;
            var markers = [];
            //This is our view locations model
            var locations = [{
                title: "Capital",
                id: 0,
                location: {
                    lat: 38.576828, 
                    lng: -121.493605
                },
                image: 'img/capital.jpg',
                content: 'Hello'
            },
            {
                title: "Old Sacramento",
                id: 0,
                location: {
                    lat: 38.583689, 
                    lng: -121.503856
                },
                image: 'img/capital.jpg',
                content: 'Hii'
            },
            {
                title: "Sutter's Fort",
                location: {
                    lat: 38.572417, 
                    lng: -121.471106
                },
                image: 'img/capital.jpg',
                content: 'Hay'
            },

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
                //Create bounds that will be displayed on map
                var bounds = new google.maps.LatLngBounds();
                //Loop through our locations and display our markers
                for (var i = 0; i < locations.length; i++) {
                    //Get our position from our array of locations
                    var position = locations[i].location;
                    var content = locations[i].content;
                    var title = locations[i].title;
                    var marker = new google.maps.Marker({
                        map: map,
                        position: position,
                        content: content,
                        title: title,
                        animation: google.maps.Animation.DROP,
                        id: i
                    });
                markers.push(marker);
                bounds.extend(marker.position);
                marker.addListener('click', function() {
                    populateInfoWindow(this, largeInfowindow);
                    toggleBounce(this, marker);
                })

            }

            map.fitBounds(bounds);

            function toggleBounce(marker) {
                //Create function to animate markers when clicked
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    marker.setAnimation(google.maps.Animation.null);
                }, 300);
                
            }

            function populateInfoWindow(marker, infowindow) {
                if (infowindow.marker != marker) {
                    infowindow.marker = marker;
                    infowindow.open(map, marker);
                    infowindow.addListener('closeclick', function() {
                        infowindow.setMarker(null);
                    })
                }

            }


      		}
                
