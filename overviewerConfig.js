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
        "cacheTag": "1610922853",
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
            "name": "angle 1",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "normalrender1",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness - overworld",
            "last_rendertime": 1610915529,
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
            "name": "angle 2",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "normalrender2",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness - overworld",
            "last_rendertime": 1610915529,
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
            "north_direction": 3
        },
        {
            "name": "angle 1",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "netherrender",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness-nether - nether",
            "last_rendertime": 1610915529,
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
            "name": "angle 1",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "endrender",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness-end - end",
            "last_rendertime": 1610396528,
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
