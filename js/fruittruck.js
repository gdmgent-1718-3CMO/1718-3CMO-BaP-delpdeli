jQuery(document).ready(function () {
    jQuery('.carousel').carousel({
        interval: 3000
    });

    jQuery('#carouselnavigatie a.nav-link').click(function () {
        var carouselslide = $(this).attr('data-carousel');
        jQuery('.carousel-item').removeClass('active');
        jQuery('#carouselnavigatie a.nav-link').removeClass('active');
        jQuery('#' + carouselslide).addClass('active');


    });



    function initMap() {

        var location = new google.maps.LatLng(51.218495, 4.401611);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 17,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels.text",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#ea0cbb"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eff3e1"
                    }]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#fed445"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#d0e3b4"
                    }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "off"
                        },
                        {
                            "color": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.medical",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#fbd3da"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#94d706"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "visibility": "off"
                        },
                        {
                            "color": "#3400ff"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#ea5b0c"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#d02f60"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#efd151"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "black"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#00c2cf"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#00c2cf"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.icon",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "hue": "#00efff"
                        },
                        {
                            "saturation": "-34"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.airport",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#cfb2db"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#a2daf2"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#87d8dd"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [{
                            "visibility": "off"
                        },
                        {
                            "color": "#f11442"
                        }
                    ]
                }
            ]
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
})(jQuery);

(function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
}(jQuery));
var $mcj = jQuery.noConflict(true);