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
        "guiness - nether",
        "guiness - end"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1615577277",
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
            "name": "NE Angle",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "normalrender1",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness - overworld",
            "last_rendertime": 1615576888,
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
            "name": "SE Angle",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "normalrender2",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness - overworld",
            "last_rendertime": 1615576888,
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
            "name": "NE Angle",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "netherrender",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness - nether",
            "last_rendertime": 1611603358,
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
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "NE Angle",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "endrender",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "guiness - end",
            "last_rendertime": 1611278158,
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
            "spawn": false,
            "north_direction": 0
        }
    ]
};
