if (typeof navigator.geolocation=='undefined') {
    alert('Browser does not support geolocation');
} else {
    navigator.geolocation.getCurrentPosition(
            function(pos){
                alert('Lat:' + pos.coord.latitude + "; Lng:" + pos.coord.longitude);
            },
            function(err){
                alert(err.code);
            }
        );
}
