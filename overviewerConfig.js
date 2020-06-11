var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "guiness - overworld",
        "guiness-nether - nether",
        "guiness-end - end"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1591903258",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "guiness",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "normalrender",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness - overworld",
            "last_rendertime": 1591900536,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -167,
                96,
                -190
            ],
            "minZoom": 0,
            "spawn": [
                -167,
                96,
                -190
            ],
            "north_direction": 0
        },
        {
            "name": "guiness-nether",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "netherrender",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness-nether - nether",
            "last_rendertime": 1591898807,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "guiness-end",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "endrender",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness-end - end",
            "last_rendertime": 1591898807,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
