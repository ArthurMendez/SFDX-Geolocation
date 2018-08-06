({
    jsLoaded : function(component, event, helper) {
        var mymap = L.map('map').setView([37.784173, -122.401557], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'YourAccessToken'
        }).addTo(mymap);
        component.set("v.map", mymap);
    },
    accountsLoaded: function(component, event, helper) {
        // Add markers
        var mymap = component.get('v.map');
        var accounts = event.getParam('accounts');
        for (var i=0; i<accounts.length; i++) {
            var account = accounts[i];
            var latLng = [account.Location__Latitude__s, account.Location__Longitude__s];
            L.marker(latLng, {account: account}).addTo(mymap);
        }  
    }
})
