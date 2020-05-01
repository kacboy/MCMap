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
        "guiness"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1588352149",
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
            "world": "guiness",
            "last_rendertime": 1588241495,
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
        }
    ]
};
