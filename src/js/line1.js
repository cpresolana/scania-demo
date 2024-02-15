if (document.querySelector("#white-btn-1") !== null) {
    document.querySelector("#white-btn-1").addEventListener("click", function () {
        pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "images/line1_1.webp",
            "autoLoad": true
        });
    })
}

if (document.querySelector("#red-btn-1") !== null) {
    document.querySelector("#red-btn-1").addEventListener("click", function red() {
        pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "images/line1_1.webp",
            "autoLoad": true
        });
    })
}

if (document.querySelector("#blue-btn-1") !== null) {

    document.querySelector("#blue-btn-1").addEventListener("click", function blue() {
        pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "images/line1_1.webp",
            "autoLoad": true
        });
    })
}

if (document.querySelector("#grey-btn-1") !== null) {
    document.querySelector("#grey-btn-1").addEventListener("click", function grey() {
        pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "images/line1_1.webp",
            "autoLoad": true
        });
    })
}
