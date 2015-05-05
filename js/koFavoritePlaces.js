// Display map
$(document).ready(function() {

    var mapOptions = {
        center: new google.maps.LatLng(35.203, -80.839), //Coordinates for Charlotte, NC
        zoom: 11, //Zoom, the higher the number, the more focused the zoom
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //Create Markers
    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(35.2258, -80.8528),
        map: map
    });

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(35.2723, -81.0051),
        map: map,
    });

    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(35.1045, -80.9395),
        map: map,
    });

    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(35.3509, -80.6836),
        map: map,
    });

    var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(35.1524, -80.8326),
        map: map,
    });

    var markers = [marker1, marker2, marker3, marker4, marker5];



    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(35.203, -80.839),
        map: map,
        icon: 'images/Arrow.png',
        draggable: true
    });



    // From Google API:
    // https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    // Add a marker to the map and push to the array.
    function addMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        markers.push(marker);
    }

    // Sets the map on all markers in the array.
    function setAllMap(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
        setAllMap(null);
    }

    // Shows any markers currently in the array.
    function showMarkers() {
        setAllMap(map);
    }

    // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }


    // Informational Windows:

    var contentString1 = "<div style='height: 200px; width: 200px;'><img src='http://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_Stadium_(16144560926).jpg'><p>Home of the Carolina Panthers!</p></div>";

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });

    google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map, marker1);
    });

    var contentString2 = "<div style='height: 200px; width: 200px;'><img src='http://upload.wikimedia.org/wikipedia/commons/0/07/National_Whitewater_Center.jpg'><p>The world's premier outdoor recreation and environmental education center.</p></div>";

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });

    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map, marker2);
    });

    var contentString3 = "<div style='height: 200px; width: 200px;'><img src='http://www.themeparkreview.com/forum/files/carowinds_768.jpg'><p>The thrill capital of the Southeast.  Come for a day of excitement.</p></div>";

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });

    google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map, marker3);
    });

    var contentString4 = "<div style='height: 200px; width: 200px;'><img src='http://cdn.charlottesgotalot.com/sites/charlottesgotalot.com/master/files/styles/profile_page_photo_400-225/public/zzdata-3315_560x373.jpg'><p>Features Nascar Nextel Cup, Busch series, ARCA and Go-Kart racing.</p></div>";

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });

    google.maps.event.addListener(marker4, 'click', function() {
        infowindow4.open(map, marker4);
    });

    var contentString5 = "<div style='height: 200px; width: 200px;'><img src='http://www.southcharlottelifestyle.com/wp-content/uploads/2011/11/Southpark-Mall-in-South-Charlotte-NC.png'><p>An upscale shopping mall located in Charlotte, North Carolina.</p></div>";

    var infowindow5 = new google.maps.InfoWindow({
        content: contentString5
    });

    google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map, marker5);
    });


    // Locations:

    var locations = [{
        name: "Bank of America Stadium",
        facts: "Home of the Carolina Panthers!",
        marker: marker1,
        lat: 35.2258,
        lon: -80.8528
    }, {
        name: "U.S. National Whitewater Center",
        facts: "The world's premier outdoor recreation and environmental education center.",
        marker: marker2,
        lat: 35.2723,
        lon: -81.0051
    }, {
        name: "Carowinds",
        facts: "The thrill capital of the Southeast.",
        marker: marker3,
        lat: 35.1045,
        lon: -80.9395
    }, {
        name: "Charlotte Motor Speedway",
        facts: "Features Nascar Nextel Cup, Busch series, ARCA and Go-Kart racing.",
        marker: marker4,
        lat: 35.3509,
        lon: -80.6836
    }, {
        name: "SouthPark Mall",
        facts: "An upscale shopping mall located in Charlotte, North Carolina.",
        marker: marker5,
        lat: 35.1524,
        lon: -80.8326
    }];


    // Knockout ViewModel

    var viewModel = {
        query: ko.observable('')
    };

    viewModel.locations = ko.dependentObservable(function() {
        var search = this.query().toLowerCase();
        return ko.utils.arrayFilter(locations, function(location) {
            return location.name.toLowerCase().indexOf(search) >= 0;
        });
    }, viewModel);

    ko.applyBindings(viewModel);

});


